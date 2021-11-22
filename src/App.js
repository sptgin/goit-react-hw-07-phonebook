import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
import './App.css';

export default function App() {
  return (
    <div>
      <h1 className="header__main">React HW 007 Phonebook</h1>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
}
