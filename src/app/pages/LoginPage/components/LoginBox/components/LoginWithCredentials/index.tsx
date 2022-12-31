import * as React from 'react';
import styled from 'styled-components/macro';
import { SidebarDiv } from 'app/shared/styles/sidebar/SidebarDiv';
import { MainButton } from 'app/shared/styles/main/MainButton';
import { AbstractInput } from 'app/shared/styles/abstract/AbstractInput';
import { AbstractDiv } from 'app/shared/styles/abstract/AbstractDiv';

export function LoginWithCredentials() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Declare a function to handle the form submission
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <AbstractInput
          type="email"
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <AbstractInput
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <br />
        <br />
        <MainButton type="submit">sing up</MainButton>
      </form>
    </>
  );
}
