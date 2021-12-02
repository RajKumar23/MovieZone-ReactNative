import React from 'react';
import { globalStyles } from '../styles/global';
import { Button, View, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import CustomButton from "../shared/button";
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string()
        .min(4)
        .required(),
    description: yup.string()
        .min(4)
        .required(),
    rating: yup.string()
        .required()
        .test("is-num-1-5", "Raring must be number from 1 - 5", (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

export default function ReviewForm({ addReview }) {
    return (
        <Formik
            initialValues={{ title: "", description: "", rating: "" }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                addReview(values)
                actions.resetForm()
            }}
        >
            {(props) => (
                <View>
                    <TextInput
                        style={globalStyles.textBoxStyle}
                        placeholder="Movie name"
                        onChangeText={props.handleChange("title")}
                        value={props.values.title}
                        onBlur={props.handleBlur("title")} />
                    <Text style={globalStyles.textViewError}>
                        {props.touched.title && props.errors.title}
                    </Text>

                    <TextInput
                        style={globalStyles.textBoxStyle}
                        multiline
                        minHeight = {100}
                        placeholder="Description"
                        onChangeText={props.handleChange("description")}
                        value={props.values.description}
                        onBlur={props.handleBlur("description")} />
                    <Text style={globalStyles.textViewError}>
                        {props.touched.description && props.errors.description}
                    </Text>

                    <TextInput
                        style={globalStyles.textBoxStyle}
                        placeholder="Rating (1-5)"
                        keyboardType="numeric"
                        onChangeText={props.handleChange("rating")}
                        value={props.values.rating}
                        onBlur={props.handleBlur("rating")} />
                    <Text style={globalStyles.textViewError}>
                        {props.touched.rating && props.errors.rating}
                    </Text>
                    {/* <Button title="Submit Form" color="maroon" onPress={props.handleSubmit} /> */}
                    <CustomButton title="Submit Form" onPress={props.handleSubmit} />
                </View>
            )}
        </Formik>
    )
}