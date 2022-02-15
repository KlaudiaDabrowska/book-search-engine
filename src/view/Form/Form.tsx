import React from 'react';
import { StyledLabel, StyledInput, StyledForm, StyledButton } from '../../styles/Form.styles';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';

export const SearchBookForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      language: '',
      publishedDate: '',
    },
    // validationSchema:

    // }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      formik.resetForm();
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
            // isInvalid={formik.values.title && !!formik.values.title}
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
            // isInvalid={formik.values.title && !!formik.values.title}
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
            // isInvalid={formik.values.title && !!formik.values.title}
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
            // isInvalid={formik.values.title && !!formik.values.title}
            placeholder="Date of publiaction"
          />
        </StyledLabel>

        {/* {formik.values.title && formik.values.title ? <div>{formik.values.title}</div> : null} */}
      </Form.Group>

      <StyledButton variant="primary" type="submit" size="sm">
        Search
      </StyledButton>
    </StyledForm>
  );
};
