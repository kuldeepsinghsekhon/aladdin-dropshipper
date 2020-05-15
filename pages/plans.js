import React from 'react';
import {Page,Avatar,Filters, Card,Button, ResourceItem, ResourceList, TextStyle, TextField, Layout, Select, Thumbnail} from '@shopify/polaris';
import {CirclePlusMinor} from '@shopify/polaris-icons';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../components/CardForm';
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default class Plans extends React.Component {
    render() {
    return (
        <Page>
            
    <Elements stripe={stripePromise}>
      <CardForm/>
    </Elements>
 
        </Page>

    );
    }
}