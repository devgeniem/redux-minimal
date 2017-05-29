import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Nav, NavItem, Glyphicon, Button } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import './Menu.styles.scss';

@translate(['menu'])
export default class Menu extends React.Component { //eslint-disable-line
  render() {
    const { t } = this.props;
    return (
      <Nav bsStyle="pills" className="header-nav" style={{ position: 'relative' }}>
        <IndexLinkContainer to="/">
          <NavItem>
            {t('home')}
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/user-edit">
          <NavItem>
            {t('add_user')} <Glyphicon glyph="plus-sign" />
          </NavItem>
        </LinkContainer>
        <LanguageSwitcher changeLanguage={this.props.changeLanguage} />
      </Nav>
    );
  }
}

Menu.propTypes = {
  t: PropTypes.func,
  changeLanguage: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  t: undefined,
};

const LanguageSwitcher = props => (
  <div style={{ position: 'absolute', right: '10px', marginTop: '3px' }}>
    <Button style={{ border: 'none' }} onClick={() => props.changeLanguage('fi')}>
      FI
          </Button>
    <Button style={{ marginLeft: '20px', border: 'none' }} onClick={() => props.changeLanguage('en')}>
      EN
          </Button>
  </div>
);

LanguageSwitcher.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};

