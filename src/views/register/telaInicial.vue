<template>
  <v-app>
    <v-flex>
      <div class="main">  
        <div class="img-logo">
          <v-avatar color="#D9D9D9" size="150"></v-avatar>
        </div>

        <div class="btns">
          <h2 class="mt-5">BEM VINDO AO IFCÃO</h2>
          <v-col>
            <div class="my-5">
              <v-btn color="#"> Login </v-btn>
            </div>
            <div>
              <v-btn color="#"> Cadastro </v-btn>
            </div>
          </v-col>
        </div>
      </div>
    </v-flex>
  </v-app>
</template>

<style>
.main {
  background: linear-gradient(to top, #F3FBF4, #E3FBB9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h2{
  color:#000000
  
  
}



.v-avatar{
  margin-top: 23rem;
}



.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default{
  background-color: #DEEFB8;
  color:#000000;
  font-weight: 400;
  height: 50px;
  width: 23rem;
  border-radius: 60px;
  box-shadow: none;
  border-style: groove;

  
  
  
}


</style>
