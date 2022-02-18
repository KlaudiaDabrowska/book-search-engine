import React, { Dispatch, SetStateAction } from 'react';
import { StyledLabel, StyledInput, StyledForm, StyledButton } from '../../styles/Form.styles';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';

interface SearchBookFormProps {
  setQueryTitle: Dispatch<SetStateAction<string | undefined>>;
  setQueryAuthor: Dispatch<SetStateAction<string | undefined>>;
}

export const SearchBookForm = ({ setQueryAuthor, setQueryTitle }: SearchBookFormProps) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      language: '',
      publishedDate: '',
    },

    onSubmit: (values) => {
      setQueryTitle(values.title);
      setQueryAuthor(values.author);
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
        <StyledLabel label="Language">
          <StyledInput
            id="language"
            name="language"
            type="language"
            onChange={formik.handleChange}
            value={formik.values.language}
            onBlur={formik.handleBlur}
            placeholder="Language"
          />
        </StyledLabel>
        <StyledLabel label="Date of publication">
          <StyledInput
            id="publishedDate"
            name="publishedDate"
            type="publishedDate"
            onChange={formik.handleChange}
            value={formik.values.publishedDate}
            onBlur={formik.handleBlur}
            placeholder="Date of publiaction"
          />
        </StyledLabel>
      </Form.Group>

      <StyledButton variant="primary" type="submit" size="sm">
        Search
      </StyledButton>
    </StyledForm>
  );
};
