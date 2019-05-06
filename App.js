import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <TitleBar>
                    <Title>Welcome back,</Title>
                    <Name>Meng</Name>
                </TitleBar>
                <Avatar source={require("./assets/avatar.jpg")} />
                <Subtitle>Continue Learning</Subtitle>
                <Card />
            </Container>
        );
    }
}

const Container = styled.View`
    background: #f0f3f5;
    flex: 1;
`;

const TitleBar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 20px;
`;

const Title = styled.Text`
    font-size: 16px;
    color: #b8bece;
    font-weight: 500;
`;

const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 50px;
    text-transform: uppercase;
`;

const Name = styled.Text`
    font-size: 20px;
    color: #3c4560;
    font-weight: bold;
`;

const Avatar = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
    margin-left: 20px;
    position: absolute;
    top: 0;
    left: 0;
`;
