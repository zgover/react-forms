import React from 'react';
import PropTypes from 'prop-types';
import MuiTextField from '@material-ui/core/TextField';

import FormFieldGrid from '../common/form-field-grid';
import { validationError } from '../common/helpers';
import { meta, input } from '@data-driven-forms/common/src/prop-types-templates';
import { useFieldApi } from '@data-driven-forms/react-form-renderer';

const TextArea = (props) => {
  const { input, isReadOnly, isDisabled, placeholder, isRequired, label, helperText, description, validateOnMount, meta, ...rest } = useFieldApi(
    props
  );
  const invalid = validationError(meta, validateOnMount);
  return (
    <FormFieldGrid>
      <MuiTextField
        {...input}
        fullWidth
        error={!!invalid}
        helperText={invalid || helperText || description}
        disabled={isDisabled}
        label={label}
        placeholder={placeholder}
        required={isRequired}
        inputProps={{
          readOnly: isReadOnly
        }}
        multiline
        {...rest}
      />
    </FormFieldGrid>
  );
};

TextArea.propTypes = {
  input,
  meta,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.node,
  isRequired: PropTypes.bool,
  label: PropTypes.node,
  helperText: PropTypes.node,
  validateOnMount: PropTypes.bool,
  description: PropTypes.node
};

export default TextArea;
