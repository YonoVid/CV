<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import { defaultFilter, getLocalization } from "$lib/data/static";
	import { localizationES } from "$lib/data/es";
	import type { FilterList, LocalizationData } from "$lib/types/generic";

	import Basic from "$lib/components/Basic.svelte";
	import Job from "$lib/components/Job.svelte";
	import Education from "$lib/components/Education.svelte";
	import Others from "$lib/components/Others.svelte";
	import Skill from "$lib/components/Skill.svelte";

	let url: string = $state("");
	let filter: FilterList = defaultFilter;
	let localization: LocalizationData = $state(localizationES);

	onMount(() => {
		url = window.location.href;

		var userLang = navigator.language || "es";
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("lang")) {
			userLang = urlParams.get("lang") || userLang;
		}

		if (userLang !== "es") {
			localization = getLocalization(userLang);
		}
		console.log($state.snapshot(localization));
	});
</script>

<div>
	<Basic personal={localization.personal} />
	<Job
		title={localization.titles.job}
		animationDelay={1000}
		experiences={localization.personal.job || []}
		{filter}
	/>
	<Skill
		titles={localization.titles.skill}
		animationDelay={1500}
		skills={localization.personal.skill || []}
		{filter}
	/>
	<Education
		title={localization.titles.education}
		animationDelay={2000}
		experiences={localization.personal.education}
	/>
	<Others
		titles={localization.titles.other}
		animationDelay={5000}
		personal={localization.personal}
		{filter}
	/>
</div>
<footer transition:fade={{ delay: 6000, duration: 1000 }}>
	<div style="display: flex; justify-content: flex-end; gap: 1em;">
		{#each localization.personal.social as social}
			<a href={social.url}>{social.type}</a><br />
		{/each}
		<a
			href={url.includes("localhost")
				? "https://yonovid.github.io/CV/?lang=es"
				: url}>{localization.titles.web || "Versión Web"}</a
		>
	</div>
</footer>

<style>
	a {
		font-family: "Numans";
		font-size: 0.5em;
	}
</style>
