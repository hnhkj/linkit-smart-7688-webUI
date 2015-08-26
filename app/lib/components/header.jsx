import React from 'react';
import Radium from 'radium';
import mui from 'material-ui';
let {AppBar} = mui;
import Logo from '../../img/mediatek.png';

var ThemeManager = new mui.Styles.ThemeManager();

@Radium
export default class loginComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppBar
          style={styles.bg}
          iconElementLeft={<img style={styles.img} src={Logo} />}
        />
      </div>
    )
  }

}

loginComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};

var styles = {
  bg: {
    background: '#00a1de'
  },
  img: {
    width: '130px',
    marginTop: '15px'
  }
}

export default loginComponent;