import DocPage from '@docs/doc-page';

<DocPage>

# Form Renderer

Form renderer is the core component of Data Driven Forms. It is used to generate and render forms.

```jsx
import { FormRenderer } from '@data-driven-forms/react-form-renderer';

const App = () => (<FormRenderer
  onSubmit={onSubmit}
  schema={schema}
  componentMapper={componentMapper}
  FormTemplate={FormTemplate}
/>)
```

## Required props

|Prop|Type|Description|
|----|:--:|----------:|
|[componentMapper](/mappers/custom-mapper)|object|Defines types of form field components. Field components can change the state of the form.|
|[FormTemplate](/components/form-template)|Component|Components which defines a template of the form. This component receives two props from the renderer: `formFields` and `schema`. `formFields` is the content of the form. You should wrap this content into your `<form>` component and add form buttons.|
|onSubmit|func|A submit callback which receives two arguments: `values` and `formApi`.|
|schema|object|A schema which defines structure of the form.|

## Optional props

|Prop|Type|Description|Default|
|----|:--:|----------:|------:|
|[actionMapper](/mappers/action-mapper)|object|Action mapper allows to map props to functions.||
|[clearOnUnmount](/schema/clear-on-unmount)|bool|Will clear values of unmounted components. You can also set this to specific component in the form schema.|false|
|[clearedValue](/schema/cleared-value)|any|Value that will be set to field with **initialValue** after deleting it. Useful for forms while editing.|undefined|
|onReset|func|A reset callback. You don't need to manually clear the form values!||
|onCancel|func|A cancel callback, which receives `values` as the first argument.||
|debug|func|A function which will be called with every form update, i.e. `({ values }) => setValues(values)`, please take a look [here](https://final-form.org/docs/react-final-form/types/FormProps#debug)||
|initialValues|object|An object of fields names as keys and values as their values.||
|[schemaValidatorMapper](/mappers/schema-validator-mapper)|object|Schema validators mapper. You can control schemas of your components, validators and actions.||
|subscription|object|You can pass your own [subscription](https://final-form.org/docs/react-final-form/types/FormProps#subscription), which will be added to default settings.|`{ pristine: true, submitting: true, valid: true }`|
|[validate](/schema/introduction#validate)|func|A function which receives all form values and returns an object with errors.||
|[validatorMapper](/mappers/validator-mapper)|object|A mapper containing custom validators, it's automatically merged with the default one.||

## Schema

The root object of the schema represents the Form component. Please read more [here](/schema/introduction).

### Example

```javascript
schema = {
  title: 'Your name', // you can extract this in formTemplate
  description: 'Add your name', // you can extract this in formTemplate
  fields: [{
    name: 'userName',
    label: 'Your name is',
    component: componentTypes.TEXT_FIELD,
  }]
};
```

</DocPage>