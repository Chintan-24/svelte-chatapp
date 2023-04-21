<script>
	import {db} from "./firebase";
	import {collectionData} from "rxfire/firestore";
	import {startWith} from "rxjs/operators";
	import autoscroll from '@kizivat/svelte-autoscroll';


	export let user;
	export let logout;

	let message = "";

	const query = db.collection("chats").orderBy("sentAt");
	const chats = collectionData(query, "id").pipe(startWith([]));

	function sendMessage(){

		if (message.length > 0) //dont allow sending blank msg
		{
			db.collection("chats").add({
					uid:user.uid,
					message:message,
					avatar:user.photoURL,
					sentAt:+new Date()
				});
				message = ""; //clear txt field after sending
			}
	}

	import Keydown from "svelte-keydown";

	let chatName  = [
		'Employees of the Month',
		'Memers and Schemers',
		'The Donut Call List',
		'Left on Read',
		'We Excel',
		'We Need a Vacation',
		'The Board Room',
		'Water Cooler Talk',
		'Silence Is not Golden Here',
		'Area 51',
		'Bad Ideas',
		'No Turning Back',
		'Bodies By Dad',
		'The Romys To My Michelle',
		'Smells Like Team Spirit',
		'Toilet Texters',
		'Outfit Repeaters',
		'Meme Bank',
		'Game of Phones',
		'People I See Too Often',
		'Meme Team',
		'Group Chat',
		'Friends Without Benefits',
		'Toyotathon',
		'I have Got a Bad Idea',
		'Non-Stop Notifications',
		'Never-ending Nonsense',
		'Message Undeliverable',
		'Nuclear Codes',
		'Netflix Passwords',
		'Heirlooms',
		'No Way Home?',
		'Walkie-Talkies',
		'Pen Pals',
		'We Get Degrees',
		'Mind Meld',
		'The Brain Cells',
		'Running on Empty',
		'Saved By the Bell',
		'Winners Circle',
		'Peas in a Pod',
		'We Better Get an A on This',
		'We are Honor Roll',
		'Grammar Enthusiasts',
		'Beautiful Minds',
		'Secret Society',
		'High School Reunion',
		'School Spirit',
		'Quad Goals',
		'Cal-u-later Dudes',
		'The Limit Does Not Exist',
		'The Breakfast Club',
		'A Class Act',
		'The Real Drama Club',
		'Woof Friends',
		'Garam masala',
		'Chamber of Secrets',
		'F.R.I.E.N.D.S.',
		'My Imaginary Friends',
		'Ride or Die',
		'Always Together',
		'In Our Element',
		'Golden Bars',
		'Not Fast, Just Furious',
		'Birds of a Feather',
		'Real Talk',
		'My Cup of Tea',
		'Wish We Were OO7',
		'Power Rangers',
		'Gossip',
		'Dark Angels'
	];

	let emojis = ["😀 ", "😃 ", "😄 ", "😁 ", "😆 ", "😅 ", "😂 ", "🤣 ", "😊 ", "😇 ", "🙂 ", "🙃 ", "😉 ", "😌 ", "😍 ", "🥰 ", "😘 ", "😗 ", "😙 ", "😚 ", "😋 ", "😛 ", "😝 ", "😜 ", "🤪 ", "🤨 ", "🧐 ", "🤓 ", "😎 ", "🤩 ", "🥳 ", "😫 ", "😩 ", "🥺 ", "😳 ", "🥵", "🥶", "😱 ", "😨 ", "😰 ", "🤔 ", "🤭 ", "🤫 ", "🤥 ", "😶 ", "😐 ", "😑 ", "😬 ", "😮 ", "😲 ", "🥱 ", "😴 ", "🤤 ", "😪 ", "😵 ", "🤐 ", "🥴 ", "🤧 ", "😷 ", "🤒 ", "🤕 ", "🤑", "🤠", "🤡 ", "👻 ", "👽 ", "👾 ", "🤖 ", "🎃 ", "😺 ", "😸 ", "😹 ", "😻 ", "😼 ", "😽 ", "🙀 ", "😿 ", "😾"]
	

	let randomNumber = Math.floor(Math.random()*chatName.length);
	let randomEmoji = Math.floor(Math.random()*emojis.length);

</script>

<style>

	main {
		height: 100%;
		background: #fbfbfb;
		/* box-shadow: 0px 0px 50px 0px rgba(214, 220, 233, 0.75); */
		border-radius: 25px;
	}
	.header {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 12px;
		border-bottom: 1px solid rgb(238, 238, 238);
	}
	.header .logo {
		font-size: 15px;
		font-weight: 600;
		color: #111;
	}
	.header button {
		background: transparent;
		padding: 6px 10px;
		border: 1px solid rgb(238, 238, 238);
		border-radius: 20px;
		color: #555;
		font-size: 15px;
		cursor: pointer;
	}
	.form {
		display: flex;
		width: 100%;
		height: 40px;
		border-top: 1px solid rgb(238, 238, 238);
		/* background:#83a1db9f ; */
	}
	.form input {
		flex: 1;
		border: none;
		outline: none;
		font-size: 16px;
		color: #111;
		padding: 10px;
		padding-left: 20px;
	}
	.form button {
		/* padding: 12px; */
		padding-right: 15px;
		font-size: 20px;
		color: #6c8ccc;
		background: transparent;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.form button:hover{
		color: #1952c3;
		transition: 0.5s;
	}

	.messages {
		width: 100%;
		height: calc(100% - 90px);
		padding: 12px;
		overflow-y: auto;
		/* overflow-x: auto; */
	}
	.messages::-webkit-scrollbar {
		width: 4px;
		/* background: #fff; */
	}
	.messages::-webkit-scrollbar-thumb {
		width: 4px;
		background: #4267b219;
	}
	.messages .message {
		margin: 10px 0px;
		display: flex;
	}
	.messages .my-message {
		justify-content: flex-end;
	}
	.messages .message .avatar {
		width: 30px;
		height: 30px;
		margin-right: 8px;
	}
	.messages .message .text {
		padding: 10px;
		background: #eaf1ff;
		color: rgb(38, 38, 38);
		font-size: 13px;
		font-weight: 600;
		max-width: fit-content;
		flex: 1;
		border-radius: 20px;
	}
	.messages .message .avatar img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.messages .my-message .text {
		background: #4267b2;
		color: #fff;
	}

	.inputBox{
		background: #4267b200;
	}

	.logoutBtn{
		background: #e0454547;
		border: 1.5px solid #4267b2 !important;
	}

	.logoutBtn:hover{
		background: #e04545;
		color: #fff;
		transition: 0.5s;
	}
 /* tooltip  */
 .tooltip {
	position: relative;
	display: inline-block;
	border: none;
}

.tooltip .username {
	display: flex;
	flex-direction: column;
	visibility: hidden;
	width: max-content;
	background-color: rgba(0, 0, 0, 0.432);
	color: #fff;
	text-align: center;
	border-radius: 20px;
	padding: 5px;

	/* Position the tooltip */
	position: absolute;
	z-index: 1;
}

.tooltip:hover .username {
 	 visibility: visible;
}
</style>

<main class="shadow">
	<div class="header">
		<div class="logo">{emojis[randomEmoji]}{chatName[randomNumber]}</div>
		<button on:click={logout} class="logoutBtn">Logout</button>
	</div>
	<div class="messages" use:autoscroll>
		{#each $chats as chat}
			{#if user.uid == chat.uid}
				<div class="message my-message">
					<div class="text">
						{chat.message}
					</div>
				</div>
			{:else}
				<div class="message other-message">
					<div class="avatar tooltip">
						<img src={chat.avatar}>
						<!-- <span class="username">{console.log()}</span> -->
					</div>
					<div class="text">
						{chat.message}
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="form">
		<input type="text" bind:value={message} class="inputBox">
		<div></div> 
		<button on:click={sendMessage}>
			<i class="fa fa-paper-plane">
				<Keydown on:Enter={sendMessage}/>
			</i>
		</button>
	</div>
</main>