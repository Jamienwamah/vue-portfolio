<template>
<div class="main-container">
    <div class ="container-one">
        <div class="profile">
            <img src="../assets/profile.png" alt="">
            <h3>Name Here</h3>
            <p>Software Developer</p>
        </div>
        <div class="social-links">
                <div class="link">
                    <img src="../assets/github.png" alt="">
                    <a href="https://www.github.com/oishbdh"><h2>GitHub</h2></a>
                
                </div>

                <div class="link">
                    <img src="../assets/linkedin.png" alt="">
                    <a href="https://www.linkedin.com/in/ikechukwu-n-70890921a"><h2>LinkedIn</h2></a>
                
                </div>
                <div class="link">
                    <img src="../assets/fb.png" alt="">
                    <a href="https://www.facebook.com/iknwamah"><h2>Facebook</h2></a>
                
                </div>
        
        
        </div>

        <div class="container-two">
            <div class="about-me">
                <h1>About Me</h1>
                <p>I am Ikechukwu Nwamah. I graduated as a Mechanical Engineer, before I began my career as a programmer. 
                    I started out as a self-taught developer until I got a scholarship into a professional training alx_africa which is affiliated with "Holberton School 
                    of Computer Science". I would say, being a software engineer hasn't been easy, but through out the extent I have gone.
                    I declare it has been worth the journey, because programs changes everything. The world is fast advancing to the path of technology 
                </p>
            
            
            </div>
            <div class="technology-section">
                <h1>Technologies Studied</h1>
                    <div class="logo">
                        <img src="../assets/html.png" alt="">
                        <img src="../assets/css.png" alt="">
                        <img src="../assets/js.png" alt="">
                        <img src="../assets/dj.png" alt="">
                        <img src="../assets/jyn.png" alt="">
                        <img src="../assets/py.png" alt="">
                        <img src="../assets/sql.png" alt="">
                        <img src="../assets/vue.png" alt="">
                        <img src="../assets/asp.png" alt="">

                    
                    </div>
            
            
            </div>
            <div class="button-container">
                <div class="projects-button">
                    <a href="">My Projects</a>
                </div>
            </div>
            <div>
                <a href="">My Resume</a>
            
            </div>

    
        
        
        </div>



    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
    img{
        height: 20px;
    }
    
    .main-container{
        display: flex;
        flex-direction: row;
        background-color: #cececece;
    }

    .container-one{
        background-color: #ffbeff;
        padding: 2.5%;
        width: 100%;
    }

    .profile img{
        height: 7rem;
        border-radius: 70%;
    }

    .container-two{
        background-color: #cdc0fc;
        width: 100%;
    }

</style>