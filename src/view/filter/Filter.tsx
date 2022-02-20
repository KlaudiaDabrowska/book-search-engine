import React, { Dispatch, SetStateAction } from 'react';
import { StyledLabel, StyledInput, StyledForm, StyledButton, Alert } from '../../styles/Filter.styles';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { BooksFilters } from '../state/useBooksState';

interface SearchBookFormProps {
  setFilters: Dispatch<SetStateAction<BooksFilters>>;
}

export const SearchBookFilter = ({ setFilters }: SearchBookFormProps) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
    },
    validationSchema: Yup.object({
      isbn: Yup.string().min(10, 'ISBN: min 10 numbers').max(13, 'ISBN: max 13 numbers'),
    }),
    onSubmit: (values) => {
      setFilters({
        inauthor: values.author,
        intitle: values.title,
        isbn: values.isbn,
      });
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
        {formik.touched.isbn && formik.errors.isbn ? <Alert>{formik.errors.isbn}</Alert> : null}
      </Form.Group>

      <StyledButton variant="primary" type="submit" size="sm">
        Search
      </StyledButton>
    </StyledForm>
  );
};
