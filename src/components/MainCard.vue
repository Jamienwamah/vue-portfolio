<template>
<div class="wrapper">
<div class="main-container">
    <div class ="container-one">
        <div class="profile">
            <img src="../assets/profile.png" alt="">
            <h3>Ikechukwu Nwamah</h3>
            <p>Software Developer</p>
        </div>
        <div class="social-links">
                <div class="link">
                    <a href="https://www.github.com/oishbdh">
                        <img src="../assets/github.png" alt="">
                        <h2>GitHub</h2>
                    </a>
                
                </div>

                <div class="link">
                    <a href="https://www.linkedin.com/in/ikechukwu-n-70890921a">
                        <img src="../assets/linkedin.png" alt="">
                        <h2>LinkedIn</h2>
                </a>
                
                </div>
                <div class="link">
                    <a href="https://www.facebook.com/iknwamah">
                        <img src="../assets/fb.png" alt="">
                        <h2>Facebook</h2>
                    </a>
                
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
                    <a href="https://github.com/oishbdh/alx-low_level_programming.git">My Projects</a>
                </div>
            <div>
                <div class="projects-button">
                    <a href="https://eu.docworkspace.com/d/sAKvKXI2ei_ugAZT4v5OupxQ">My Resume</a>
                    </div>
                </div>
            </div>

    
        
        
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
    .wrapper{
        display: flex;
        justify-content: center;
    }
    img{
        height: 20px;
    }
    
    .main-container{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        background-color: #cececece;
        border-radius: 25px;
        width: 60%;
        background-color: #A804FF;
    }

    .container-one{
        background-color: #1292EE;
        padding: 2.5%;
        width: 100%;
        border-radius: 25px;
    }

    .profile img{
        height: 7rem;
        border-radius: 70%;
    }

    .link a{
        text-decoration: none;
        color: #2c3e5a;
        font-size: 12px;

    }

    .link img{
        height: 2rem;
    }

    .container-two{
        background-color: #cdc0fc;
        margin: 2.5%;
        width: 100%;
    }

    .about-me{
        text-align: left;
    }

    .logos img{
        height: 2.5rem;
    }

    .button-container {
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .projects-button{
        background-color: #005CA4;
        border-radius: 15px;
        padding: 5px;
        margin: 5px;
    }

    .projects-button a{
        text-decoration: none;
        color: #fff;
    }

    @media only screen and (max-width: 950px){
        .main_container{
            width: 95%;
        }
    }

</style>