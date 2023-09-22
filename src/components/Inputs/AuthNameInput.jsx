import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FaUserAlt } from 'react-icons/fa';

const AuthNameInput = ({ validateName }) => {
  return (
    <Field name="name" validate={validateName}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel>Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaUserAlt} color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your name"
              {...field}
            />
          </InputGroup>
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default AuthNameInput;
