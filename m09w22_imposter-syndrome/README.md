# M09W22 Imposter Syndrome

[Video recording Part 1](https://vimeo.com/909541109/b32de6b0f2)
[Video recording Part 2](https://vimeo.com/user147384195/fc531c5c33)

## Different terms used to describe Imposter Syndrome

- Imposter phenomenon
- Imposter experience
- Imposter syndrome
- Impostoerism
- Fraud syndrome

## What is Imposter Syndrome?

The idea that you’ve only succeeded due to luck, and not because of your talent or qualification.
This includes doubting your abilities and feeling like a fraud.

[Signs of Imposter Syndrome](https://www.verywellhealth.com/imposter-syndrome-5089237)

## Your journey

Whenever you are doubtful of your skill or abilities. Remember how far you have come across. Be proud of your progress, however little it may be.

## Overcoming Imposter Syndrome

- acknowledging & accepting the feelings or thoughts
- value constructive criticism
- ask for help
- continue to practice the skill
- know what you don’t know

## Continue to Practice Code & Upskill

You must continue to practice to code whether they are personal hobby projects or learning tutorials. The key to reducing your impostor syndrome is making continuous effort at learning and practice to become more confident of your skill and craft.

## Don't Forget Where you Started

One day, not so long ago, you were just starting. A beginner, that wouldn't be able to pick out an integer from a float. Now you've written full-stack applications, have worked in a team using Git, have not only talked the talk but are walking the walk.

This should not be taken lightly. Don't just look, but feel where you are now compared to that humble beginning. Say it aloud:

> I can write programs. I can read documentation. I can build a web application, and already have!

Spend real time looking back to admire your progress, reflect on the present and what needs to be done, and keep an eye to what is yet to come!

As an example of how far you've come, consider the following piece of code:

```javascript
document.getElementById('contact-form').onSubmit = event => {
	event.preventDefault();
	fetch('https://cat-fact.herokuapp.com/facts')
		.then(data => data.json())
		.then(facts => {
			const outputElement = document.getElementById('output');
			facts.forEach(fact => {
				outputElement.innerHTML += `<p class="fact">${fact.text}</p>`;
			});
		})
		.catch(error => {
			console.error(error);
		});
};
```

If you review it carefully…

- Can you understand it, reading each line carefully?
- Do you know what language it is, and where it could be run?
- Is it “front-end / client” or “back-end / server” code?
- Do you have an idea of what it might do, before even running it?
- Would you have known this months ago?
- Before you started at Lighthouse?
- Before you started programming?

## Where You're Going

Seniors don't know everything. They often just know how to get to an answer faster. They've learned how to learn, how to parse documentation and take the important bits quickly. If you do something everyday, sure you'll memorize the commands you use all the time, but more important than that in this forever shifting landscape is your ability to adapt.

Be willing to try, have something not work, and to try again. Experiment. `git commit`, break things, and roll back. Try things! Keep trying things until it works. Persistance and tenacity are the key.

## Be Proud

- You've come a long way.
- You've grown, and learned, a lot!
- You **are** a developer! No question.
  - You HAVE written code that works.
  - You've built a project with a team.
  - You've built a web application.
  - You **ARE** a developer! Say it aloud, and let it sink in.

## Network

- Volunteer for local, national, and online groups.
  - Volunteer as a mentor, or teacher.
  - Volunteer to do a talk on a tech or programming topic.
- Attend events (since COVID started, many are available online now too!)
  - Experience new and exciting topics curated by industry leaders.
  - Socialize after any talk or event to meet new developers and potential employers.
- Join web developer Slack groups (check your town, your province, and for national groups.)
  - Here you'll meet people!
  - Ask for help.
  - Offer help!
  - Advertise your talks!
  - Hear all sorts of perspectives from different developers.
- Consider [Canada Learning Code](https://www.canadalearningcode.ca/volunteer/), and have a look at [MeetUp](https://www.meetup.com/find/?keywords=web%20development&source=EVENTS)!

## Resources

- [Video: Imposter Syndrome at Coding Bootcamp](https://www.youtube.com/watch?v=UL4Se2ofUW8)
- [Signs of Imposter Syndrome](<https://www.verywellhealth.com/thmb/otwqoJ3HstZgmwYzRsZYT8wYrjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/imposter-syndrome-5089237-Final-d5b53a0d2f9b4a568022933d5f267930.jpg>)
- [Imposter Syndrome vs Reality](https://www.visualcapitalist.com/wp-content/uploads/2020/10/impostor-syndrome-diagram.png)
- [Valley of Despair](https://community.thriveglobal.com/wp-content/uploads/2018/09/valley_of_despair.jpg)
