/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// V1 with requirement type
// function createOrUpdateUser(initialValues: User) {
// }

// V2 with Partial / without requirement type
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

// V3 with Omit / without requirement type
// function createOrUpdateUser(initialValues: Omit<User, 'name' | 'surname'>) {
// }
createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};
