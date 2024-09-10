import { signIn } from 'next-auth/react';

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    
    if (result.error) {
      alert('Invalid credentials');
    } else {
      window.location.href = '/dashboard'; // Redirect to the protected page
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
