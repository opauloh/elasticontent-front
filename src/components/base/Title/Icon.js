import React from "react";
import styled from 'styled-components';
import { ReactComponent as Key } from '../../../assets/elacticontent-icons/Icons/16px/key.svg';

const Title = styled.h5`
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: #9F9F9F;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
`;

// const Icon = ({ icon }) => <img style={{ color: 'red' }} alt={key} src={key} />;
const Icon = ({ icon }) => <Key style={{ marginRight: 12 }} />;

export default function IconTitle({ icon, children }) {
    return (
        <Title><Icon /> {children}</Title>
    )
}