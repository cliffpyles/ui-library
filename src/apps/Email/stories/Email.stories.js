import React from "react";
import faker from "faker";
import Email from "../Email";

export default {
  title: "Apps|Email",
  component: Email
};

function getMockEmails(emailsToGenerate) {
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
          avatar: faker.image.avatar()
        }
      ],
      isUnread: false,
      subject: faker.company.catchPhrase(),
      message: faker.lorem.paragraphs(),
      folder: "Inbox"
    });
  }

  return emails;
}

function getHexColor() {
  const hexadecimal = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hexadecimal}`;
}

const props = {
  folders: [
    {
      id: `folder-${faker.random.uuid()}`,
      name: "Inbox",
      slug: "inbox",
      unreadCount: 4
    },
    { id: `folder-${faker.random.uuid()}`, name: "Sent", slug: "sent" },
    { id: `folder-${faker.random.uuid()}`, name: "Drafts", slug: "drafts" },
    { id: `folder-${faker.random.uuid()}`, name: "Trash", slug: "trash" },
    {
      id: `folder-${faker.random.uuid()}`,
      name: "Important",
      slug: "important",
      unreadCount: 1
    },
    { id: `folder-${faker.random.uuid()}`, name: "Spam", slug: "spam" },
    {
      id: `folder-${faker.random.uuid()}`,
      name: "Starred",
      slug: "starred",
      unreadCount: 1
    }
  ],
  labels: [
    {
      id: `label-${faker.random.uuid()}`,
      name: "Family",
      color: getHexColor()
    },
    {
      id: `label-${faker.random.uuid()}`,
      name: "Friends",
      color: getHexColor()
    },
    { id: `label-${faker.random.uuid()}`, name: "Work", color: getHexColor() }
  ],
  emails: getMockEmails(50)
};

export const EmailDefault = () => <Email {...props} />;

EmailDefault.story = {
  name: "default",
  parameters: {
    notes: "An email client"
  }
};
