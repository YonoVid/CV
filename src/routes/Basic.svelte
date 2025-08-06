<script lang="ts">
    import { slide, fly } from "svelte/transition"
    import { cubicIn } from "svelte/easing"

    import mapIcon from "$lib/assets/map-pin.svg"
    import phoneIcon from "$lib/assets/smartphone.svg"
    import mailIcon from "$lib/assets/mail.svg"
    import type { PersonalData } from "$lib/types/generic";
    
    import Socials from "./Socials.svelte";
    import { formatPhone } from "$lib";

    let { animationDelay = 0, personal }: { animationDelay?: number, personal: PersonalData } = $props()
</script>

<div style="padding: 0 0 0.5em 0">
    <div style="display: flex;">
        <h1 
            transition:slide={{duration: 1000, delay: animationDelay, easing: cubicIn, axis:"x"}} 
        >
            {personal.name}
        </h1>
        <Socials data={personal.social} animationDelay={animationDelay + 1000}/>
    </div>
    <div class="data" transition:fly={{duration: 2000, delay: animationDelay + 1000, y: -10}}>
        <div class="data-item">
            <img width="10em" src="{mapIcon}" alt="Map Icon"/>
            <b>{personal.region}</b>
        </div>
        <div class="data-item">
            <img width="10em" src="{phoneIcon}" alt="Phone Icon"/>
            <a href="tel:{personal.phone}">{formatPhone(personal.phone)}</a>
        </div>
        <div class="data-item">
            <img width="10em" src="{mailIcon}" alt="Mail Icon"/>
            <a href="mailto:{personal.email}">{personal.email}</a>
        </div>
    </div>
</div>

<style>
    h1{
        font-size: 2em;
        font-family: "Boldonse";
        padding: 0.5em 1em 0.5em 0.5em;
        margin: 0;
        border-radius: 0 1em 1em 0;
        color: white;
        background-color: #2E5596;
        overflow: hidden;
        white-space: nowrap;
    }
    b, a{
        font-family: "Numans";
    }
    div > a
    {
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
    .data-item > a, .data-item > b{
        text-align: center;
        margin: auto;
    }
    .data-item > img
    {
        width: 2em;
        max-width: 2em;
    }
    .data-item{
        display: flex;
        flex: 1 1 0; 
        margin: 0.5em;
    }
    .data{
        width: 100%;
        border-radius: 0.5em 0.5em 0.5em 0.5em;
        display: flex;
        justify-content: center;
        align-items:center;
        background-color: #2e549682;
    }
    @media(max-width:600px)
    {
        h1{
            white-space: normal;
        }
        .data{
            flex-direction: column;
        }
    }
</style>