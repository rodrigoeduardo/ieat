import React, { useState } from 'react';

const FormMatricula = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone1: '',
    phone2: '',
    cpf: '',
    rg: '',
    birthdate: '',
    gender: '',
    especial: '',
    atendEspecial: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envio do formulário
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone1: '',
      phone2: '',
      cpf: '',
      rg: '',
      birthdate: '',
      gender: '',
      especial: '',
      atendEspecial: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <form id="registerStudentForm" onSubmit={handleSubmit} onReset={handleReset}>
      <br />
      <div className="work">
        <h2>Matricule-se</h2>
        <br />
        <hr /><br />
      </div>
      <div className="form-group">
        <h3>Dados Pessoais:</h3>
      </div>
      <div className="form-group">
        <label htmlFor="name">Nome:*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="i-tel">Telefone 1:*</label>
        <input
          type="tel"
          name="phone1"
          pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
          id="i-tel"
          placeholder="00 00000-0000"
          value={formData.phone1}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="i-tel">Telefone 2:</label>
        <input
          type="tel"
          name="phone2"
          pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
          id="i-tel"
          placeholder="00 00000-0000"
          value={formData.phone2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:*</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
          placeholder="000.000.000-00"
          title="CPF deve estar no formato 000.000.000-00"
          value={formData.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rg">RG:*</label>
        <input
          type="text"
          id="rg"
          name="rg"
          placeholder="RG"
          value={formData.rg}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="i-date">Qual a data do seu nascimento?</label>
        <input
          type="date"
          name="birthdate"
          id="i-date"
          max="2021-11-03"
          value={formData.birthdate}
          onChange={handleChange}
        />
        <br /><br />
      </div>
      <div className="form-group">
        <label htmlFor="Genero">Gênero:</label>
        <select
          id="Genero"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled hidden>Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div className="form-group">
        <label>É portador de alguma necessidade especial?*</label>
        <input
          type="radio"
          name="especial"
          value="especial"
          checked={formData.especial === 'especial'}
          onChange={handleChange}
          required
        /> Sim
        <input
          type="radio"
          name="especial"
          value="naoespecial"
          checked={formData.especial === 'naoespecial'}
          onChange={handleChange}
        /> Não
      </div>
      <div className="form-group">
        <label>Requer atendimento especial?*</label>
        <input
          type="radio"
          name="atendEspecial"
          value="requer"
          checked={formData.atendEspecial === 'requer'}
          onChange={handleChange}
          required
        /> Sim
        <input
          type="radio"
          name="atendEspecial"
          value="naorequer"
          checked={formData.atendEspecial === 'naorequer'}
          onChange={handleChange}
        /> Não
      </div>
      <div className="form-group">
        <label htmlFor="register-password">Senha:</label>
        <input
          type="password"
          id="register-password"
          name="password"
          placeholder="Sua senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-confirm-password">Confirme a Senha:</label>
        <input
          type="password"
          id="register-confirm-password"
          name="confirmPassword"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button className="benviar" type="submit">Enviar</button>
      <button className="blimpar" type="reset">Limpar</button>
      <hr /><br />
      <p>Já tem uma conta? <a id="fazer_login" href="login">Fazer login</a></p>
    </form>
  );
};

export default FormMatricula;