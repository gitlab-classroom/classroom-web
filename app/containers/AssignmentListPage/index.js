/*
 *
 * AssignmentListPage
 *
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import selectAssignmentListPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { setAppbar } from '../Header/actions';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const tableData = [
  {
    name: 'Team Building',
    status: 'Expired',
    git: 'https://',
    action: 'Copy Git Address',
    primary: true,
    secondary: false,
    selected: true,
  },
  {
    name: 'Requirement Analysis',
    status: 'In Progress',
    git: 'https://',
    action: 'Copy Git Address',
    primary: true,
    secondary: false,
  },
  {
    name: 'Meeting',
    status: 'In Progress',
    git: 'https://',
    action: 'Copy Git Address',
    primary: true,
    secondary: false,
    selected: true,
  },
  {
    name: 'Presentation',
    status: 'In Progress',
    git: 'https://',
    action: 'Copy Git Address',
    primary: true,
    secondary: false,
  },
];


export class AssignmentListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    setAppbar: React.PropTypes.func,
  }
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }

  componentDidMount() {
    this.props.setAppbar({
      title: <FormattedMessage {...messages.header} />,
    });
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({ height: event.target.value });
  };

  render() {
    const ClassesContainer = styled.div`
      width: 100%;
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
    `;

    const HeaderContainer = styled.div`
      display: flex;
      justify-content: space-between;
    `;
    const PlusButton = styled(RaisedButton)`
      margin: 16px;
    `;
    const OperationContainer = styled.div`
      display: flex;
      align-items: stretch;
      height: 50px;
      padding-top: 12px;
    `;


    return (
      <div>
        <Helmet
          title="Assignments"
          meta={[
            { name: 'description', content: 'Description of AssignmentListPage' },
          ]}
        />
        <ClassesContainer>
          <div>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
            >
              <TableHeader
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}
                enableSelectAll={this.state.enableSelectAll}
              >
                <TableRow>
                  <TableHeaderColumn colSpan="3" tooltip="Super Header">
                    <HeaderContainer>
                      <h1>Assignments</h1>
                      <PlusButton label="Create" primary />
                    </HeaderContainer>
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Status</TableHeaderColumn>
                  <TableHeaderColumn>Action</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={this.state.showCheckboxes}
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}
              >
                {tableData.map((row, index) => (
                  <TableRow key={index} selected={row.selected}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.status}</TableRowColumn>
                    <OperationContainer>
                      <FlatButton label={row.action} primary={row.primary} secondary={row.secondary}></FlatButton>
                    </OperationContainer>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ClassesContainer>
      </div>
    );
  }
}

const mapStateToProps = selectAssignmentListPage();

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setAppbar,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentListPage);
