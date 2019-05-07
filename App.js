import React from 'react';
import Card from './components/Card';
import Course from './components/Course';
import Logo from './components/Logo';
import styled from 'styled-components';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NotificationIcon } from './Icons';


export default class App extends React.Component {
    render() {
        return (
            <Container>
                <SafeAreaView>
                    <ScrollView style={{ height: '100%'}} >
                        <TitleBar>
                            <Title>Welcome back,</Title>
                            <Name>Meng</Name>
                            <NotificationIcon
                                style={{ position: 'absolute', right: 40, top: 10 }}
                            />
                        </TitleBar>
                        <ScrollView
                            style={{ flexDirection: 'row', padding: 20, paddingLeft: 12, paddingTop: 30 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            {logos.map((logo, index) => (
                                <Logo key={index} image={logo.image} text={logo.text} />
                            ))}
                        </ScrollView>
                        <Subtitle>Continue Learning</Subtitle>
                        <ScrollView
                            horizontal={true}
                            style={{paddingBottom:30}}
                            showsHorizontalScrollIndicator={false}>
                            {cards.map((card, index) => (
                                <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                subtitle={card.subtitle}
                                caption={card.caption}
                                logo={card.logo}
                                />
                            ))}
                        </ScrollView>
                        <Subtitle>Popular Courses</Subtitle>
                        <ScrollView
                            horizontal={true}
                            style={{paddingBottom:30}}
                            showsHorizontalScrollIndicator={false}>
                            {courses.map((course, index) => (
                                <Course
                                    key={index}
                                    image={course.image}
                                    title={course.title}
                                    subtitle={course.subtitle}
                                    logo={course.logo}
                                    author={course.author}
                                    avatar={course.avatar}
                                    caption={course.caption}
                                />
                            ))}
                        </ScrollView>
                    </ScrollView>
                </SafeAreaView>
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
    margin-top: 30px;
    margin-left: 20px;
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
    margin: 25px 0 0 20px;
    text-transform: uppercase;
`;

const Name = styled.Text`
    font-size: 20px;
    color: #3c4560;
    font-weight: bold;
`;

const logos = [
    {
        image: require('./assets/logo-framerx.png'),
        text: 'Framer X'
    },
    {
        image: require('./assets/logo-figma.png'),
        text: 'Figma'
    },
    {
        image: require('./assets/logo-studio.png'),
        text: 'Studio'
    },
    {
        image: require('./assets/logo-react.png'),
        text: 'React'
    },
    {
        image: require('./assets/logo-swift.png'),
        text: 'Swift'
    },
    {
        image: require('./assets/logo-sketch.png'),
        text: 'Sketch'
    }
];

const cards = [
    {
        title: 'React Native for Designers',
        image: require('./assets/background11.jpg'),
        subtitle: 'React Native',
        caption: '1 of 12 sections',
        logo: require('./assets/logo-react.png')
    },
    {
        title: 'Styled Components',
        image: require('./assets/background12.jpg'),
        subtitle: 'React Native',
        caption: '2 of 12 sections',
        logo: require('./assets/logo-react.png')
    },
    {
        title: 'Props and Icons',
        image: require('./assets/background13.jpg'),
        subtitle: 'React Native',
        caption: '3 of 12 sections',
        logo: require('./assets/logo-react.png')
    },
    {
        title: 'Static Data and Loop',
        image: require('./assets/background14.jpg'),
        subtitle: 'React Native',
        caption: '4 of 12 sections',
        logo: require('./assets/logo-react.png')
    }
];

const courses = [
    {
        title: 'Prototype in InVision Studio',
        subtitle: '10 sections',
        image: require('./assets/background13.jpg'),
        logo: require('./assets/logo-studio.png'),
        author: 'Meng To',
        avatar: require('./assets/avatar.jpg'),
        caption: 'Design an interactive prototype'
    },
    {
        title: 'React for Designers',
        subtitle: '12 sections',
        image: require('./assets/background11.jpg'),
        logo: require('./assets/logo-react.png'),
        author: 'Meng To',
        avatar: require('./assets/avatar.jpg'),
        caption: 'Learn to design and code a React site'
    },
    {
        title: 'Design and Code with Framer X',
        subtitle: '10 sections',
        image: require('./assets/background14.jpg'),
        logo: require('./assets/logo-framerx.png'),
        author: 'Meng To',
        avatar: require('./assets/avatar.jpg'),
        caption: 'Create powerful design and code components for your app'
    },
    {
        title: 'Design System in Figma',
        subtitle: '10 sections',
        image: require('./assets/background6.jpg'),
        logo: require('./assets/logo-figma.png'),
        author: 'Meng To',
        avatar: require('./assets/avatar.jpg'),
        caption: 'Complete guide to designing a site using a collaborative design tool'
    }
];
