import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EmailListItem = ({
  emailId,
  subject,
  content,
  timestmps,
  emailKey,
  type,
  isRead,
}) => {
  const navigate = useNavigate();

  function convertTo12HourFormat(dateString) {
    const date = new Date(dateString);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
  }
  function removeHTMLTagsUsingDOMParser(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    return doc.body.textContent || "";
  }
  const formatedContent = removeHTMLTagsUsingDOMParser(content);
  const time = convertTo12HourFormat(timestmps);

  const viewEmail = async () => {
    const updateReadStatus = () => {
      const { email: userEmail } = JSON.parse(localStorage.getItem("user"));
      const formatedEmail = userEmail.replace(".", "_");
      fetch(
        `https://mail-box-c-default-rtdb.firebaseio.com/${formatedEmail}/inbox/${emailKey}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({
            read: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.error) throw new Error(res.error);
          console.log("state Updated read:true");
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    };
    if (type === "recievedEmail") {
      updateReadStatus();
    }

    await navigate(`/email/${type}/${emailKey}`);
  };

  console.log(type);
  return (
    <>
      <ListGroup.Item
        onClick={viewEmail}
        className="w-full flex-col flex justify-between flex-nowrap cursor-pointer hover:bg-slate-300 md:flex-row  md:items-center p-3"
      >
        <span className="font-bold">
          {!isRead && (
            <div className="w-2 inline-block  h-2 mr-1 bg-blue-500 shadow-lg shadow-blue-800 rounded-full"></div>
          )}
          {emailId}
        </span>
        <span className="font-semibold text-gray-500 md:w-[250px]">
          {subject}
        </span>
        <span className="line-clamp-1 text-gray-400 md:w-[500px] md:text-center">
          {formatedContent}
        </span>
        <span className="md:relative absolute right-2 top-2 md:top-0 md:right-0">
          {time}
        </span>
      </ListGroup.Item>
    </>
  );
};

export default EmailListItem;
