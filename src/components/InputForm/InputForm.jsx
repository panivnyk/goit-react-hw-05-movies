import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';
const InputForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={({ query }, { resetForm }) => {
        onSubmit(query);
        resetForm();
      }}
    >
      <Form>
        <label>
          <Field type="text" name="query" />
          <button type="submit">Search</button>
        </label>
      </Form>
    </Formik>
  );
};

export default InputForm;
InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
