<script>
	import {auth,googleProvider} from "./firebase";
	import {authState} from "rxfire/auth";

	import Chatroom from "./Chatroom.svelte";

	import Footer from "./footer.svelte";

	let user;

	const unsubscribe = authState(auth).subscribe(usr => user = usr);

	function login(){
		auth.signInWithPopup(googleProvider);
	}

	function logout(){
		auth.signOut();
	}
</script>

<style>
	main {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 500px;
		background: #4267b23e;
		/* border: 1px solid #eee; */
		box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
		border-radius: 25px;
		box-shadow: 0px 0px 55px 0px rgb(144, 176, 243);
	}
	.login-form {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);	
	}
	.login-form button {
		padding: 10px;
		background: #fff;
		color: #111;
		font-size: 16px;
		cursor: pointer;
		outline: none;
		border: 1px solid #bbb;
	}
	.login-form button i.fa {
		padding-right: 10px;
		border-right: 1px solid #ddd;
		color: #555;
	}

	.signInBtn{
		background: #4267b2b5;
		border: 1.5px solid #4267b2 !important;
		border-radius: 20px;
	}

	.signInBtn:hover{
		background: #4267b2d6;
		color: #fff;
		transition: 0.5s;
	}
</style>

<main>
	{#if user}
		<Chatroom user={user} logout={logout}/>
	{:else}
		<div class="login-form">
			<button on:click={login} class="signInBtn">
				<i class="fa fa-google"></i>
				Sign In with Google
			</button>
		</div>
	{/if}
	<Footer />
</main>

