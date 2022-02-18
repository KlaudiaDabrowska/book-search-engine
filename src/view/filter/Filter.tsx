import React, { Dispatch, SetStateAction } from 'react';
import { StyledLabel, StyledInput, StyledForm, StyledButton } from '../../styles/Filter.styles';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';

interface SearchBookFormProps {
  setQueryTitle: Dispatch<SetStateAction<string | undefined>>;
  setQueryAuthor: Dispatch<SetStateAction<string | undefined>>;
  setQueryISBN: Dispatch<SetStateAction<string | undefined>>;
}

export const SearchBookFilter = ({ setQueryAuthor, setQueryTitle, setQueryISBN }: SearchBookFormProps) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
    },

    onSubmit: (values) => {
      setQueryTitle(values.title);
      setQueryAuthor(values.author);
      setQueryISBN(values.isbn);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Form.Group>
        <StyledLabel label="Title">
          <StyledInput
            id="title"
            name="title"
            type="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            placeholder="Title"
          />
        </StyledLabel>
        <StyledLabel label="Author">
          <StyledInput
            id="author"
            name="author"
            type="author"
            onChange={formik.handleChange}
            value={formik.values.author}
            onBlur={formik.handleBlur}
            placeholder="Author"
          />
        </StyledLabel>
        <StyledLabel label="ISBN">
          <StyledInput
            id="isbn"
            name="isbn"
            type="isbn"
            onChange={formik.handleChange}
            value={formik.values.isbn}
            onBlur={formik.handleBlur}
            placeholder="isbn"
          />
        </StyledLabel>
      </Form.Group>

      <StyledButton variant="primary" type="submit" size="sm">
        Search
      </StyledButton>
    </StyledForm>
  );
};
