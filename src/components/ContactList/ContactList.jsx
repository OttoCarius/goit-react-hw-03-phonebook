import PropTypes from 'prop-types';

import { StyledList } from './ContactList.styled';
import { StyledText } from './ContactList.styled';
import { StyledItem } from './ContactList.styled';
import { StyledButton } from './ContactList.styled';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <div>
      <StyledList>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <StyledItem key={contact.id}>
                  <StyledText>
                    {contact.name} : {contact.number}
                  </StyledText>
                  <StyledButton
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  >
                    Delete
                  </StyledButton>
                </StyledItem>
              );
            })}
          </>
        )}
      </StyledList>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func,
};

export default ContactList;
