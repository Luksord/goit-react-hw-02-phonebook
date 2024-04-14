import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ filter, onChangeInput }) => {
  return (
    <div className={css.filter}>
      <label className={css.form_label}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter} // wartość początkową
        onChange={onChangeInput}
        className={css.form_input}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
