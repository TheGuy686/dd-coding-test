<style scoped>
h1 {
	font-size: 2em;
}

.tag {
	margin-top: 4px;
}
</style>

<template>
<div>
	<a-layout style="padding: 10px 10px 24px 24px;">

		<page-header title='Creator of this Project' :showRightBtn="false" />

		<a-layout>

			<a-layout-sider :width="250" style="background-color: #f0f2f5; padding: 24px;">

				<div style="display: flex; justify-content: center; margin-bottom: 24px;">

					<a-avatar :size="200" src="/ryan.png" />

				</div>

				<h1 style="font-weight: bold; margin-bottom: 12px;">Ryan J. Cooke</h1>

				<p>Email: <br><b>ryanjcooke@hotmail.com</b></p>

				<p>Contact Number: <br><b>+44 743 201 3025</b></p>

				<p>

					<a href="https://www.linkedin.com/in/ryan-j-cooke/" target="_blank">LinkedIn</a>

				</p>

				<p>

					<a href="https://github.com/TheGuy686/dd-coding-test" target="_blank">GitHub</a>

				</p>

				<p>

					<a href="https://ryansresume.s3.amazonaws.com/resume.html" target="_blank">Resume Summary</a>

				</p>
				
			</a-layout-sider>

			<a-layout :style="{ padding: '0 24px 0px 24px' }">

				<a-layout-content style="text-align: left;">

					<h1>Personal Summary</h1>

					<p>
						To whom it may concern.

					</p>

					<p>
						I've honed my skills in everything from low-level languages like C++ to cross-platform frameworks like Flutter, React Native, and Qt. This journey has shaped me into the diverse software engineer / full-stack developer I am today.
					</p>

					<p>
						I'm currently professionally proficient in full-stack development, TypeScript, Node.js, and an array of other tech stacks and tools. Whether it's conventional server apps, mobile apps, or websites I always aim to craft the most exceptional applications possible, with the highest performance possible.
						Leading teams for a decade, I've been dedicated to fostering creativity and teamwork, consistently delivering exceptional solutions that surpass expectations.
					</p>

					<p>
						
						I'm eager to align my skills with a forward-thinking company. Please check out my attached resume. I’d love to chat about how I could contribute to your team.

					</p>
						
					<p>	
						Thank you for considering my application.
					</p>

					<p>
						Best regards, Ryan J Cooke
					</p>

					<h1 style="font-weight: bold; margin-bottom: 12px;">
					
						Skills
					
					</h1>

					<p>These most of my top skills that I've either used years on end, have extensive professional experience or have used enough at some point to make it to this list.</p>

				</a-layout-content>

				<a-row>

					<a-tag class="tag" :color="generateRandomDarkColor()" :key="i" v-for="s, i in skills">

						{{ s.title }}

					</a-tag>

				</a-row>

			</a-layout>

		</a-layout>

	</a-layout>

</div>
</template>

<script>
import { ref } from 'vue';
import PageHeader from '../components/page-header.vue';
import { Avatar } from 'ant-design-vue';

export default {
	components: {
		PageHeader,
		Avatar,
	},
	data() {
		return {
			skills: [
				{
					key: 'software-testing',
					title: 'Software Testing',
					color: '#8A2BE2',
				},
				{
					key: 'infrastructure-architect',
					title: 'Infrastructure Architect',
					color: '#20B2AA',
				},
				{
					key: 'full-stack-development',
					title: 'Full Stack Development',
					color: '#FF6347',
				},
				{
					key: 'typescript',
					title: 'TypeScript',
					color: '#6495ED',
				},
				{
					key: 'vue-js',
					title: 'Vue.js',
					color: '#DC143C',
				},
				{
					key: 'node',
					title: 'Node.js',
					color: '#32CD32',
				},
				{
					key: 'redis',
					title: 'Redis',
					color: '#FFD700',
				},
				{
					key: 'bash',
					title: 'Bash Scripting',
					color: '#008080',
				},
				{
					key: 'docker',
					title: 'Docker',
					color: '#4682B4',
				},
				{
					key: 'flutter',
					title: 'Flutter',
					color: '#FF4500',
				},
				{
					key: 'figma-plugin',
					title: 'Figma Plugin Development',
					color: '#9400D3',
				},
				{
					key: 'c-sharp',
					title: 'C#',
					color: '#FF69B4',
				},
				{
					key: 'agile-methodologies',
					title: 'Agile Methodologies (SCRUM)',
					color: '#87CEEB',
				},
				{
					key: 'automation-tools',
					title: 'Automation Tools',
					color: '#FF8C00',
				},
				{
					key: 'qt',
					title: 'QT',
					color: '#00CED1',
				},
				{
					key: 'c-plus-plus',
					title: 'C++',
					color: '#FFD700',
				},
				{
					key: 'qml',
					title: 'QML',
					color: '#8A2BE2',
				},
				{
					key: 'react-native',
					title: 'React Native',
					color: '#FF6347',
				},
				{
					key: 'mobile-development',
					title: 'Mobile Development',
					color: '#6495ED',
				},
				{
					key: 'html',
					title: 'HTML',
					color: '#E9967A',
				},
				{
					key: 'css',
					title: 'CSS',
					color: '#4682B4',
				},
				{
					key: 'qlik-apis',
					title: 'Qlik APIs',
					color: '#32CD32',
				},
				{
					key: 'chrome-plugins',
					title: 'Chrome Plugins',
					color: '#FF1493',
				},
				{
					key: 'mysql',
					title: 'MySQL',
					color: '#1E90FF',
				},
				{
					key: 'elastic-search',
					title: 'Elasticsearch',
					color: '#FFD700',
				},
				{
					key: 'dynamo-db',
					title: 'DynamoDB',
					color: '#228B22',
				},
				{
					key: 'mongo-db',
					title: 'MOngoDB',
					color: '#224B26',
				},
				{
					key: 'blockchain',
					title: 'Blockchain',
					color: '#FFA500',
				},
				{
					key: 'cryptocurrency-solutions-architect',
					title: 'Cryptocurrency Solutions Architect',
					color: '#800080',
				},
				{
					key: 'cli-tools',
					title: 'CLI Tools',
					color: '#DAA520',
				},
				{
					key: 'real-time-data-apps',
					title: 'Real-time Data Apps',
					color: '#FF4500',
				},
				{
					key: 'big-data-architect',
					title: 'Big Data Architect',
					color: '#8B008B',
				},
				{
					key: 'scalable-solutions',
					title: 'Scalable Solutions',
					color: '#32CD32',
				},
				{
					key: 'aws',
					title: 'AWS',
					color: '#FF9900',
				},
				{
					key: 'google-cloud',
					title: 'Google Cloud',
					color: '#4285F4',
				},
				{
					key: 'azure',
					title: 'Azure',
					color: '#008AD7',
				},
				{
					key: 'security-protocols',
					title: 'Security Protocols and Implementation',
					color: '#9370DB',
				},
				{
					key: 'microservices-architecture',
					title: 'Microservices Architecture',
					color: '#00CED1',
				},
				{
					key: 'serverless-computing',
					title: 'Serverless Computing',
					color: '#32CD32',
				},
				{
					key: 'ci-cd',
					title: 'Continuous Integration/Continuous Deployment (CI/CD)',
					color: '#FF6347',
				},
				{
					key: 'performance-optimization',
					title: 'Performance Optimization',
					color: '#FFD700',
				},
				{
					key: 'openai',
					title: 'OpenAI',
					color: '#9400D3',
				},
				{
					key: 'api-design',
					title: 'API Design and Development',
					color: '#4682B4',
				},
			],
		};
	},
	methods: {
		generateRandomDarkColor() {
			// Generating random values for RGB between 0 and 127
			const red = Math.floor(Math.random() * 128);
			const green = Math.floor(Math.random() * 128);
			const blue = Math.floor(Math.random() * 128);

			// Converting RGB values to hexadecimal format
			const redHex = red.toString(16).padStart(2, '0');
			const greenHex = green.toString(16).padStart(2, '0');
			const blueHex = blue.toString(16).padStart(2, '0');

			// Combining the RGB values to form a color
			return `#${redHex}${greenHex}${blueHex}`;
		}
	}
};

</script>
