import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/main.scss';
import { Layout } from 'antd';
import R from 'ramda';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class App extends React.Component { //eslint-disable-line

  constructor(props) {
    super(props);

    this.state = {
      current: props.menu[0].key,
    };
  }

  _renderMenu = () => (
    <Menu
      onClick={(e) => {this.setState({current: e.key})}}
      selectedKeys={[this.state.current]}
      mode="horizontal">
      {this._renderMenuItems()}
    </Menu>
  )

  _renderMenuItems = () => {
    const { menu } = this.props;
    if ( !menu || menu.length === 0 ) return null;
    return R.map( this._renderSingleMenuItem, menu);
  }

  _renderSingleMenuItem = ( item ) => (
    <Menu.Item key={item.key}>
      <Icon type={item.icon || "folder"} /> {item.name}
    </Menu.Item>
  )

  render() {
    return (
      <Layout className="page-home">
        <Layout.Header>
          {this._renderMenu()}
        </Layout.Header>
        <Layout.Content>{this.props.children}</Layout.Content>
        <Layout.Footer>2kg siika</Layout.Footer>
      </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

App.defaultProps = {
  menu: [
    {
      name: 'home',
      key: '1',
      icon: 'mail',
    },
    {
      name: 'jotain',
      key: '2',
      icon: 'question',
    },
    {
      name: 'jotain',
      key: '3',
      icon: 'close',
    },
    {
      name: 'jotain',
      key: 'exclamation',
    },
    {
      name: 'jotain',
      key: '5',
    },
    {
      name: 'jotain',
      key: '6',
    },
    {
      name: 'jotain',
      key: '7',
    },
  ],
};
