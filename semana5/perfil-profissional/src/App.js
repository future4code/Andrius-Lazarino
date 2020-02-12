import React from 'react';
import './App.css';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard';
import ImageButton from './Components/ImageButton/ImageButton';
import PageSection from './Components/PageSection/PageSection';

function App() {
  function teste(){
    alert("Testando")
  }
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
      <PageSection titulo="Dados Pessoais">
        <BigCard titulo="Andrius" imagem={require("./img/perfil.jpg")} descricao="Sou o andrius e estudo react na future4" />
        <SmallCard imagem={require("./img/email.png")} titulo="Email: " descricao="andrius.rochalazarino@gmail.com" />
        <SmallCard imagem={require("./img/endereco.png")} titulo="Endereço: " descricao="Avenida Duque de Caxias, 96" />
        <ImageButton imagem={require("./img/iconbaixo.png")} descricao="Ver Mais" />
      </PageSection>
      <PageSection titulo="Experiências profissionais">
        <BigCard titulo="Future4" imagem={require("./img/future4.jpg")} descricao="Formando desenvolvedores para o futuro!" />
        <BigCard titulo="Outsmart" imagem={require("./img/outsmart.jpg")} descricao="Criando apps incríveis para grandes clientes." />
      </PageSection>
      <PageSection titulo="Minhas redes sociais">
        <ImageButton imagem={require("./img/linkedin.png")} redirecionar={"https://www.linkedin.com/in/andrius-lazarino-82768b155/"} descricao="Linkedin" />
        <ImageButton imagem={require("./img/instagram.png")} redirecionar={"https://www.instagram.com/andriuslaza/"} descricao="Instagram" />
        <ImageButton imagem={require("./img/facebook.png")} redirecionar={"https://www.facebook.com/andriusrl"} descricao="Facebook" />
      </PageSection>
      <PageSection titulo="Informações completas">
        <BigCard titulo="Andrius" imagem={require("./img/perfil.jpg")} descricao="Sou o andrius e estudo react na future4" />
        <SmallCard imagem={require("./img/email.png")} titulo="Email: " descricao="andrius.rochalazarino@gmail.com" />
        <SmallCard imagem={require("./img/endereco.png")} titulo="Endereço: " descricao="Avenida Duque de Caxias, 96" />
        <SmallCard imagem={require("./img/telefone.png")} titulo="Telefone: " descricao="(67 )992-199-555" />
        <SmallCard imagem={require("./img/idade.png")} titulo="Idade: " descricao="25 anos" />
        <SmallCard imagem={require("./img/sexo.png")} titulo="Sexo: " descricao="Masculino" />
        <ImageButton imagem={require("./img/iconcima.png")} descricao="Ver Menos" />
      </PageSection>
    </div>
  );
}

export default App;
