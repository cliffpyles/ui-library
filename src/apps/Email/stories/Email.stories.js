import React from "react";
import faker from "faker";
import Email from "../Email";

export default {
  title: "Apps|Email",
  component: Email
};
function getMockFolders() {
  return [
    { id: "Inbox", name: "Inbox", unreadCount: 4 },
    { id: "Sent", name: "Sent" },
    { id: "Drafts", name: "Drafts" },
    { id: "Trash", name: "Trash" },
    { id: "Important", name: "Important", unreadCount: 1 },
    { id: "Spam", name: "Spam" },
    { id: "Starred", name: "Starred", unreadCount: 1 }
  ];
}
function getMockEmails() {
  const folderNames = [
    "Development",
    "Design",
    "Finance",
    "Marketing",
    "Support"
  ];
  const emailsToGenerate = 50;
  let emails = [];
  while (emails.length < emailsToGenerate) {
    const emailId = `email-${faker.random.uuid()}`;
    emails.push({
      id: emailId,
      sender: faker.helpers.contextualCard(),
      recipients: [
        {
          name: "John Doe",
          email: "jdoe@example.com",
          avatar: faker.iamge.avatar()
        }
      ]
    });
  }
}

const props = {
  folders: [],
  labels: [
    { name: "Family", color: "blue" },
    { name: "Friends", color: "green" },
    { name: "Work", color: "orange" }
  ],
  emails: []
};

export const EmailDefault = () => <Email {...props} />;

EmailDefault.story = {
  name: "default",
  parameters: {
    notes: "An email client"
  }
};
