import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const contacts = await writeFile(
    PATH_DB,
    JSON.stringify(updatedContacts, null, 2),
  );
  return contacts;
};
