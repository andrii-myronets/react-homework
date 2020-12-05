import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { connect } from 'react-redux';


import { FormErrorsTab } from './FormErrorsTab';
import { validationSchema } from './validationSchema';
import { deleteCart } from '../../store/productList';
import { selectFormValues, setFormValues } from '../../store/formValues';

const mapStateToProps = state => ({
    formValues: selectFormValues(state)
})



export const FormCart = connect( mapStateToProps, { deleteCart, setFormValues })(({ formValues, setFormValues, deleteCart }) => {
    
    const initialValues = formValues
    
    const onSubmit = (values, actions) => {
        console.log('BUYER:',values);
        actions.resetForm();
        setFormValues({
            firstname:"",
            lastname:"",
            age:"",
            deliveryAddress:"",
            phoneNumber:""
        });        
        deleteCart();
    }


    return (
        <>
        <StyledHeaderForm>Fill out the order form</StyledHeaderForm>
        <Formik
            initialValues = {initialValues}
            onSubmit = {onSubmit}
            validationSchema = {validationSchema}           
        >
            {({ values, errors, handleBlur }) => (                
                <StyledForm onBlur={ e => {
                    handleBlur(e);
                    setFormValues(values);
                } }>

                    <StyledField name='firstname' type='text' placeholder='firstname'/>
                    <StyledField name='lastname' type='text' placeholder='lastname'/>
                    <StyledField name='age' type='text' placeholder='age'/>
                    <StyledField name='deliveryAddress' type='text' placeholder='delivery address'/>
                    <StyledField name='phoneNumber' type='text' placeholder='phone number'/>
                    <StyledBtn type='submit'>Checkout</StyledBtn> 
                                     
                    <FormErrorsTab errors={errors}/>
                </StyledForm>
            )}
        </Formik>
        </>
    )
})

const StyledForm = styled(Form)`
width: 300px;
margin: 10px auto;
display: flex;
flex-direction: column;
`

export const StyledField = styled(Field)`
    display: block;
    width: 97.4%;
    height: 25px;
    margin-top: 5px;
`
export const StyledBtn = styled.button`
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    font-size: 18px;
`
export const StyledHeaderForm = styled.h2`
    text-align: center;
    margin: 10px;
`