import { Flex } from '@chakra-ui/react';
import ContactsList from 'components/Contacts/ContactList';
import ContactTools from 'components/Contacts/ContactTools';

const ContactsPage = () => {
  return (
    <Flex flexDir={{ base: 'column', lg: 'row' }} align="center">
      <ContactTools />
      <ContactsList />
    </Flex>
  );
};

export default ContactsPage;
