import { React, Component } from 'react';
import PropTypes from 'prop-types';

// import { StyledList } from './FeedbackOptions.styled';
import { StyledInput } from './ContactForm.styled';
import { StyledButton } from './ContactForm.styled';
import { StyledCont } from './ContactForm.styled';
import { StyledLabel } from './ContactForm.styled';

const STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = STATE;

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !number) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(STATE);

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <StyledCont>
          <StyledLabel htmlFor="name">
            Name
            <StyledInput
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </StyledLabel>
          <StyledLabel>
            Number
            <StyledInput
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="Enter phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </StyledLabel>
          <StyledButton type="submit" onClick={() => {}}>
            Add contact
          </StyledButton>
        </StyledCont>
      </form>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };

export default ContactForm;
