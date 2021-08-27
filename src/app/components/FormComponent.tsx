import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Item } from '@common/types';
import { v4 as uuidv4 } from 'uuid';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

interface FromComponentProps {
    addItem: any;
    updateItem: any;
    activeItem: Item;
}

export const FormComponent = ({ addItem, updateItem, activeItem }: FromComponentProps) => {
    var initialValues: Item = { id: '', firstName: '', lastName: '', email: '' };
    
    if(activeItem !== undefined) initialValues = activeItem;

    const onSubmit = (values: Item, {setSubmitting, resetForm}: FormikHelpers<Item>) => {
        if(!activeItem){
            addItem({id: uuidv4(), firstName: values.firstName, lastName: values.lastName, email: values.email});
            resetForm({})
        }else{
            updateItem({id: values.id, firstName: values.firstName, lastName: values.lastName, email: values.email});
        }    
    }

    return (
        <div className="form">
            <Typography variant="h6">Form</Typography>
            <div>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={onSubmit}
                >
                    {({errors, touched}) => (
                        <Form className="form_body">
                            <Field id="id" name="id" hidden />
                            <div className="input_section">
                                <label htmlFor="firstName">First Name</label>
                                <Field id="firstName" name="firstName" placeholder="John" />
                                {errors.firstName && touched.firstName && <div className="error_field">{errors.firstName}</div>}
                            </div>
                            <div className="input_section">
                                <label htmlFor="lastName">Last Name</label>
                                <Field id="lastName" name="lastName" placeholder="Doe" />
                                {errors.lastName && touched.lastName && <div className="error_field">{errors.lastName}</div>}
                            </div>
                            <div className="input_section">
                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" placeholder="john@acme.com" type="email" />
                                {touched.email && errors.email && <div className="error_field">{errors.email}</div>}
                            </div>
                                <button type="submit">
                                {activeItem && (<span>Save</span>)}
                                {!activeItem && (<span>Submit</span>)}
                                </button>
                           
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}