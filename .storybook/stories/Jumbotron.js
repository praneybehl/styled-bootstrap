import React from 'react';
import { storiesOf } from '@storybook/react';

import Jumbotron from '../../src/components/Jumbotron';
import Button from '../../src/components/Button';
import Headings from '../../src/components/Headings';

export default storiesOf('Jumbotron', module)
  .add('Jumbotron', () => (
    <div style={{ width: '99vh', margin: '0 auto'}}>
      <Jumbotron>
        <Headings.h1>Hello, world!</Headings.h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button.Link color="primary" size="large" href="#" role="button">Learn more</Button.Link>
        </p>
      </Jumbotron>
    </div>
  ))
  .add('Fluid Jumbotron', () => (
    <div style={{ width: '100%'}}>
      <Jumbotron fluid>
        <Headings.h1>Hello, world!</Headings.h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button.Link color="primary" size="large" href="#" role="button">Learn more</Button.Link>
        </p>
      </Jumbotron>
    </div>
  ));
