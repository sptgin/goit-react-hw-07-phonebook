import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../redux/actions';
import { useGetContactsQuery } from '../services/phonebook-api';
import Loader from '../components/Loader';
import './ContactsList.css';

export default function ContactsList() {
  // const contacts = useSelector(state =>
  //   state.contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(state.filter.toLowerCase()),
  //   ),
  // );
  const filter = useSelector(state => state.filter);

  const { data, isFetching } = useGetContactsQuery();

  console.log(data);

  //const dispatch = useDispatch();
  return (
    <div>
      {isFetching && <Loader />}
      {data && !isFetching && (
        <ul className="contact__list">
          {data.map(contact => {
            return (
              <ContactListItem
                className="contacts__list-item"
                key={contact.id}
                contact={contact}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

{
  /* <>
  {data && !isFetching && (
    <ul>
      {data
        .filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
        )
        .map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
  )}
</>; */
}
