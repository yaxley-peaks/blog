---
layout: base.liquid
tags: post
ptitle: "Rootless Root"
title: "The Unix Koans of Master Foo"
---

### To which are also appended, other supplementary works that appear in the text.

31/10/2024

These are usually found at
[catb.org](https://catb.org/~esr/writings/unix-koans/) maintained by
[ESR](http://www.catb.org/~esr/). However the website usually has SSL
issues, and also it references other works which are no longer
available, so this is an attempt to consolidate all of them in one
place.


# Table of Contents

1.  [Rootless Root](#rootless-root)
    1.  [Editor&rsquo;s Introduction](#org3e7bb6c)
    2.  [Master Foo and the Ten Thousand Lines](#orgf5df578)
    3.  [Master Foo and the Script Kiddie](#orgcdb2a7b)
    4.  [Master Foo Discourses on the Two Paths](#org7dc08a2)
    5.  [Master Foo and the Methodologist](#org0bf7494)
    6.  [Master Foo Discourses on the Graphical User Interface](#orgdb22f9e)
    7.  [Master Foo and the Old Hand](#org271560b)
    8.  [Master Foo and the Shell Tools](#orgc1254fd)
    9.  [Master Foo and the Nervous Novice](#org617fd9a)
    10. [Master Foo and the Recruiter](#orgeb86396)
    11. [Master Foo Discourses on Returning to Windows](#org760cbe6)
    12. [Master Foo and the Unix Zealot](#orgf1763d2)
    13. [Master Foo Discourses on the Unix-Nature](#orgdb9ca61)
    14. [Master Foo and the MCSE](#orgc3f10bb)
    15. [Master Foo and the End User](#orgc71f03c)
    16. [Master Foo and the Programming Prodigy](#orged2c76c)
    17. [Master Foo and the Hardware Designer](#orgf3ff13b)
2.  [The Tao of Programming](#the-tao-of-programming)
    1.  [Book 1 &#x2013; The Silent Void](#orgf03e22d)
    2.  [Book 2 &#x2013; The Ancient Masters](#org338cbe0)
    3.  [Book 3 &#x2013; Design](#org2cb3817)
    4.  [Book 4 &#x2013; Coding](#org91c337b)
3.  [The Unix Power Classic](#the-unix-power-clasic)
4.  [AI Koans](#ai-koans)
5.  [LoginTaka](#logintaka)
6.  [Tales of Zen Master Greg](#tales-of-zen-master-greg)


# Rootless Root

![img](../_assets/rootlessroot.png "&ldquo;無根的根&rdquo;")


## Editor&rsquo;s Introduction

The discovery of the collection of koans known as the Rootless Root,
apparently preserved for decades in the dry upper air of the Western
Mountains, has ignited great controversy in scholarly circles. Are these
authentic documents shedding new light on the teaching of the early Unix
patriarchs? Or are they clever pastiches from a later age, commanding
the authority of semi-mythical figures such as the Patriarchs Thompson,
Ritchie and McIlroy for doctrines which evolved closer to our own era?

It is impossible to say for certain. All sides in the dispute have made
much of an alleged similarity to that venerable classic,
[The Tao of Programming](#the-tao-of-programming). But Rootless Root
is quite different in tone and style from the loose, poetic anecdotes of
the James translation, focused as it is on the remarkable and enigmatic
figure of Master Foo.

A newer work, [the Unix Power Classic](#the-unix-power-clasic), translates the Tao Te Ching into an
idiom similar to that of Rootless Root. Unix Power Classic may well have been
influenced by Rootless Root, or further research may disclose that they had
common sources.

It would be more apposite to seek parallels in the [AI Koans](#ai-koans);
indeed, there are textual clues that the author of the Rootless Root may
have redacted certain versions of the AI Koans. We are also on much
firmer ground in seeking connections with the [Loginataka](#logintaka); indeed,
it is quite possible that the unknown authors of Rootless Root and of
Loginataka were one and the same person, possibly a student of Master
Foo himself.

Mention should also be made of the [Tales of Zen Master Greg](#tales-of-zen-master-greg), though
the Nine Inch Nails references have cast some doubt on their antiquity
and it is thus unlikely that they influenced Rootless Root.

A newer work, [the Unix Power Classic](#the-unix-power-clasic), translates the Tao Te Ching into an
idiom similar to that of Rootless Root. Unix Power Classic may well have been
influenced by Rootless Root, or further research may disclose that they had
common sources.

That the title of the work was intended as a reference to the Zen
classic [Gateless Gate](https://en.wikipedia.org/wiki/The_Gateless_Barrier) of Mumon, we can say with fair confidence.
There are echoes of Mumon in several of the koans.

There is considerable dispute over whether Master Foo should be assigned
to the Eastern (New Jersey) School, or the Western School that grew out
of the Patriarch Thompson&rsquo;s epochal early journey to Berkeley. If this
question has not been settled, it is perhaps because we cannot even
establish that Master Foo ever existed! He might merely be a composite
of a group of teachers, or of an entire dharma lineage.

Even supposing the legend of Master Foo accreted around the teaching of
some a single person, what of his favored student Nubi? Nubi has all the
earmarks of a stock figure, the perfect disciple. One is reminded of the
tales surrounding the Buddha&rsquo;s favorite follower Ananda. It seems likely
that there was a historical Ananda, but no trace of his actual
personality has survived the euhemerizing process by which the life of
the Buddha was polished into timeless myth.

In the end, all we can do is take these teaching stories on their own
terms, and extract what kernels of wisdom may be found there.

The redaction of the Rootless Root is a work in progress, as the source
materials present many difficulties in reconstruction and
interpretation. Future versions may include more stories as these
difficulties are overcome.


## Master Foo and the Ten Thousand Lines

Master Foo once said to a visiting programmer: “There is more Unix-nature in one
line of shell script than there is in ten thousand lines of C”.

The programmer, who was very proud of his mastery of C, said: “How can this be?
C is the language in which the very kernel of Unix is implemented!”

Master Foo replied: “That is so. Nevertheless, there is more Unix-nature in one
line of shell script than there is in ten thousand lines of C”.

The programmer grew distressed. “But through the C language we experience the
enlightenment of the Patriarch Ritchie! We become as one with the operating
system and the machine, reaping matchless performance!”

Master Foo replied: “All that you say is true. But there is still more
Unix-nature in one line of shell script than there is in ten thousand lines of
C”.

The programmer scoffed at Master Foo and rose to depart. But Master Foo nodded
to his student Nubi, who wrote a line of shell script on a nearby whiteboard,
and said: “Master programmer, consider this pipeline. Implemented in pure C,
would it not span ten thousand lines?”

The programmer muttered through his beard, contemplating what Nubi had written.
Finally he agreed that it was so.

“And how many hours would you require to implement and debug that C program?”
asked Nubi.

“Many”, admitted the visiting programmer. “But only a fool would spend the time
to do that when so many more worthy tasks await him”.

“And who better understands the Unix-nature?” Master Foo asked. “Is it he who
writes the ten thousand lines, or he who, perceiving the emptiness of the task,
gains merit by not coding?”

Upon hearing this, the programmer was enlightened.


## Master Foo and the Script Kiddie

A stranger from the land of Woot came to Master Foo as he was eating the morning
meal with his students.

“I hear y00 are very l33t”, he said. “Pl33z teach m3 all y00 know”.

Master Foo&rsquo;s students looked at each other, confused by the stranger&rsquo;s barbarous
language. Master Foo just smiled and replied: “You wish to learn the Way of
Unix?”

“I want to b3 a wizard hax0r”, the stranger replied, “and 0wn ever3one&rsquo;s b0xen”.

“I do not teach that Way”, replied Master Foo.

The stranger grew agitated. “D00d, y00 r nothing but a p0ser”, he said. “If y00
n00 anything, y00 wud t33ch m3”.

“There is a path”, said Master Foo, “that might bring you to wisdom”. The master
scribbled an IP address on a piece of paper. “Cracking this box should pose you
little difficulty, as its guardians are incompetent. Return and tell me what you
find”.

The stranger bowed and left. Master Foo finished his meal.

Days passed, then months. The stranger was forgotten.

Years later, the stranger from the land of Woot returned.

“Damn you!” he said, “I cracked that box, and it was easy like you said. But I
got busted by the FBI and thrown in jail”.

“Good”, said Master Foo. “You are ready for the next lesson”. He scribbled an IP
address on another piece of paper and handed it to the stranger.

“Are you crazy?” the stranger yelled. “After what I&rsquo;ve been through, I&rsquo;m never
going to break into a computer again!”

Master Foo smiled. “Here”, he said, “is the beginning of wisdom”.

On hearing this, the stranger was enlightened.


## Master Foo Discourses on the Two Paths

Master Foo instructed his students:

“There is a line of dharma teaching, exemplified by the Patriarch McIlroy&rsquo;s
mantra ‘Do one thing well’, which emphasizes that software partakes of the Unix
way when it has simple and consistent behavior, with properties that can be
readily modeled by the mind of the user and used by other programs”.

“But there is another line of dharma teaching, exemplified by the Patriarch
Thompson&rsquo;s great mantra ‘When in doubt, use brute force’, and various sutras on
the value of getting 90% of cases right now, rather than 100% later, which
emphasizes robustness and simplicity of implementation”.

“Now tell me: which programs have the Unix nature?”

After a silence, Nubi observed:

“Master, these teachings may conflict”.

“A simple implementation is likely to lack logic for edge cases, such as
resource exhaustion, or failure to close a race window, or a timeout during an
uncompleted transaction”.

“When such edge cases occur, the behavior of the software will become irregular
and difficult. Surely this is not the Way of Unix?”

Master Foo nodded in agreement.

“On the other hand, it is well known that fancy algorithms are brittle. Further,
each attempt to cover an edge case tends to interact with both the program&rsquo;s
central algorithms and the code covering other edge cases”.

“Thus, attempts to cover all edge cases in advance, guaranteeing ‘simplicity of
description’, may in fact produce code that is overcomplicated and brittle or
which, plagued by bugs, never ships at all. Surely this is not the Way of Unix?”

Master Foo nodded in agreement.

“What, then, is the proper dharma path?” asked Nubi.

The master spoke:

“When the eagle flies, does it forget that its feet have touched the ground?
When the tiger lands upon its prey, does it forget its moment in the air? Three
pounds of VAX!”

On hearing this, Nubi was enlightened.


## Master Foo and the Methodologist

When Master Foo and his student Nubi journeyed among the sacred sites, it was
the Master&rsquo;s custom in the evenings to offer public instruction to Unix
neophytes of the towns and villages in which they stopped for the night.

On one such occasion, a methodologist was among those who gathered to listen.

“If you do not repeatedly profile your code for hot spots while tuning, you will
be like a fisherman who casts his net in an empty lake”, said Master Foo.

“Is it not, then, also true”, said the methodology consultant, “that if you do
not continually measure your productivity while managing resources, you will be
like a fisherman who casts his net in an empty lake?”

“I once came upon a fisherman who just at that moment let his net fall in the
lake on which his boat was floating”, said Master Foo. “He scrabbled around in
the bottom of his boat for quite a while looking for it”.

“But”, said the methodologist, “if he had dropped his net in the lake, why was
he looking in the boat?”

“Because he could not swim”, replied Master Foo.

Upon hearing this, the methodologist was enlightened.


## Master Foo Discourses on the Graphical User Interface

One evening, Master Foo and Nubi attended a gathering of programmers who had met
to learn from each other. One of the programmers asked Nubi to what school he
and his master belonged. Upon being told they were followers of the Great Way of
Unix, the programmer grew scornful.

“The command-line tools of Unix are crude and backward”, he scoffed. “Modern,
properly designed operating systems do everything through a graphical user
interface”.

Master Foo said nothing, but pointed at the moon. A nearby dog began to bark at
the master&rsquo;s hand.

“I don&rsquo;t understand you!” said the programmer.

Master Foo remained silent, and pointed at an image of the Buddha. Then he
pointed at a window.

“What are you trying to tell me?” asked the programmer.

Master Foo pointed at the programmer&rsquo;s head. Then he pointed at a rock.

“Why can&rsquo;t you make yourself clear?” demanded the programmer.

Master Foo frowned thoughtfully, tapped the the programmer twice on the nose,
and dropped him in a nearby trashcan.

As the programmer was attempting to extricate himself from the garbage, the dog
wandered over and piddled on him.

At that moment, the programmer achieved enlightenment.


## Master Foo and the Old Hand

An experienced Unix programmer, hearing of Master Foo&rsquo;s wisdom, came to him for
guidance. Approaching the Master, he bowed three times and said:

“Master Foo, I am gravely troubled. In my youth, those who followed the Great
Way of Unix used software that was simple and unaffected, like ed and mailx.
Today, they use vim and mutt. Tomorrow I fear they will use KMail and Evolution,
and Unix will have become like Windows — bloated and covered over with GUIs.”

Master Foo said: “But what software do you use when you want to draw a poster?”

The programmer replied: “I&#x2026;have never done that. But I am sure that I could
use LaTeX or pic to accomplish it without GUIs, in the proper Unix way.”

Master Foo then said: “Which one will reach the other side of the river: The one
who dreams of a raft, or the one that hitchhikes to the next bridge?”

Upon hearing this, the programmer was enlightened.


## Master Foo and the Shell Tools

A Unix novice came to Master Foo and said: “I am confused. Is it not the Unix
way that every program should concentrate on one thing and do it well?”

Master Foo nodded.

The novice continued: “Isn&rsquo;t it also the Unix way that the wheel should not be
reinvented?”

Master Foo nodded again.

“Why, then, are there several tools with similar capabilities in text
processing: sed, awk and Perl? With which one can I best practice the Unix way?”

Master Foo asked the novice: “If you have a text file, what tool would you use
to produce a copy with a few words in it replaced by strings of your choosing?”

The novice frowned and said: “Perl&rsquo;s regexps would be excessive for so simple a
task. I do not know awk, and I have been writing sed scripts in the last few
weeks. As I have some experience with sed, at the moment I would prefer it. But
if the job only needed to be done once rather than repeatedly, a text editor
would suffice.”

Master Foo nodded and replied: “When you are hungry, eat; when you are thirsty,
drink; when you are tired, sleep.”

Upon hearing this, the novice was enlightened.


## Master Foo and the Nervous Novice

There was a novice who learned much at the Master&rsquo;s feet, but felt something to
be missing. After meditating on his doubts for some time, he found the courage
to approach Master Foo about his problem.

“Master Foo,” he asked “why do Unix users not employ antivirus programs? And
defragmentors? And malware cleaners?”

Master Foo smiled, and said “When your house is well constructed, there is no
need to add pillars to keep the roof in place.”

The novice replied “Would it not be better to use these things anyway, just to
be certain?”

Master Foo reached for a nearby ball of string, and began wrapping it around the
novice&rsquo;s feet.

“What are you doing?” the novice asked in surprise.

Master Foo replied simply: “Tying your shoes.”

Upon hearing this, the novice was enlightened.


## Master Foo and the Recruiter

A technical recruiter, having discovered that that the ways of Unix hackers were
strange to him, sought an audience with Master Foo to learn more about the Way.
Master Foo met the recruiter in the HR offices of a large firm.

The recruiter said, “I have observed that Unix hackers scowl or become annoyed
when I ask them how many years of experience they have in a new programming
language. Why is this so?”

Master Foo stood, and began to pace across the office floor. The recruiter was
puzzled, and asked “What are you doing?”

“I am learning to walk,” replied Master Foo.

“I saw you walk through that door” the recruiter exclaimed, “and you are not
stumbling over your own feet. Obviously you already know how to walk.”

“Yes, but this floor is new to me.” replied Master Foo.

Upon hearing this, the recruiter was enlightened.


## Master Foo Discourses on Returning to Windows

A student said: “We have learned that Unix is not just an operating system, but
also a style of approaching problems.”

Master Foo nodded in agreement.

The student continued: “Then, the Great Way of Unix can be applied on other
operating systems?”

Master Foo sat silent for a moment, then said: “In every operating system there
is a path to the Great Way, if only we can find it.”

The student continued: “What, then, of Windows? It is preinstalled on most
computers, and though its tools are mostly far inferior, they are easy to use
for beginners. Surely, Windows users could benefit from the Unix philosophy.”

Master Foo nodded again.

The student said: “How, then, are those enlightened in the Unix Way to return to
the Windows world?”

Master Foo said: “To return to Windows, you have but to boot it up.”

The student said, growing agitated: “Master Foo, if it is so easy, why are there
so many monolithic and broken software packages for Windows? Elegant software
should also be possible with a GUI and fancy colors, but there is little
evidence that this occurs. What becomes of an enlighted one who returns to
Windows?”

Master Foo: “A broken mirror never reflects again; fallen flowers never go back
to the old branches.”

Upon hearing this, all present were enlightened.


## Master Foo and the Unix Zealot

A Unix zealot, having heard that Master Foo was wise in the Great Way, came to
him for instruction. Master Foo said to him:

“When the Patriarch Thompson invented Unix, he did not understand it. Then he
gained in understanding, and no longer invented it”.

“When the Patriarch McIlroy invented the pipe, he knew that it would transform
software, but did not know that it would transform mind”.

“When the Patriarch Ritchie invented C, he condemned programmers to a thousand
hells of buffer overruns, heap corruption, and stale-pointer bugs”.

“Truly, the Patriarchs were blind and foolish!”

The zealot was greatly angered by the Master&rsquo;s words.

“These enlightened ones”, he protested. “gave us the Great Way of Unix. Surely,
if we mock them we will lose merit and be reborn as beasts or MCSEs”.

“Is your code ever completely without stain and flaw?” demanded Master Foo.

“No”, admitted the zealot, “no man&rsquo;s is”.

“The wisdom of the Patriarchs”, said Master Foo, “was that they knew they were
fools”.

Upon hearing this, the zealot was enlightened.


## Master Foo Discourses on the Unix-Nature

A student said to Master Foo: “We are told that the firm called SCO holds true
dominion over Unix”.

Master Foo nodded.

The student continued, “Yet we are also told that the firm called OpenGroup also
holds true dominion over Unix”.

Master Foo nodded.

“How can this be?” asked the student.

Master Foo replied:

“SCO indeed has dominion over the code of Unix, but the code of Unix is not
Unix. OpenGroup indeed has dominion over the name of Unix, but the name of Unix
is not Unix”.

“What, then, is the Unix-nature?” asked the student.

Master Foo replied:

“Not code. Not name. Not mind. Not things. Always changing, yet never changing”.

“The Unix-nature is simple and empty. Because it is simple and empty, it is more
powerful than a typhoon”.

“Moving in accordance with the law of nature, it unfolds inexorably in the minds
of programmers, assimilating designs to its own nature. All software that would
compete with it must become like to it; empty, empty, profoundly empty,
perfectly void, hail!”

Upon hearing this, the student was enlightened.


## Master Foo and the MCSE

Once, a famous Windows system administrator came to Master Foo and asked him for
instruction: “I have heard that you are a powerful Unix wizard. Let us trade
secrets, that we may both gain thereby.”

Master Foo said: “It is good that you seek wisdom. But in the Way of Unix, there
are no secrets.”

The administrator looked puzzled at this. “But it is said that you are a great
Unix guru who knows all the innermost mysteries. As do I in Windows; I am an
MCSE, and I have many other certifications of knowledge not common in the world.
I know even the most obscure registry entries by heart. I can tell you
everything about the Windows API, yes, even secrets those of Redmond have
half-forgotten. What is the arcane lore that gives you your power?”

Master Foo said: “I have none. Nothing is hidden, nothing is revealed.”

Growing angry, the administrator said “Very well, if you hold no secrets, then
tell me: what do I have to know to become as powerful in the Unix way as you?”

Master Foo said: “A man who mistakes secrets for knowledge is like a man who,
seeking light, hugs a candle so closely that he smothers it and burns his hand.”

Upon hearing this, the administrator was enlightened.


## Master Foo and the End User

On another occasion when Master Foo gave public instruction, an end user, having
heard tales of the Master&rsquo;s wisdom, came to him for guidance.

He bowed three times to Master Foo. “I wish to learn the Great Way of Unix”, he
said “but the command line confuses me”.

Some of the onlooking neophytes began to mock the end user, calling him
“clueless” and saying that the Way of Unix is only for those of discipline and
intelligence.

The Master held up a hand for silence, and called the most obstreperous of the
neophytes who had mocked forward, to where he and the end user sat.

“Tell me”, he asked the neophyte, “of the code you have written and the works of
design you have uttered”.

The neophyte began to stammer out a reply, but fell silent.

Master Foo turned to the end-user. “Tell me”, he inquired, “why do you seek the
Way?”

“I am discontent with the software I see around me”, the end user replied. “It
neither performs reliably nor pleases the eye and hand. Having heard that the
Unix way, though difficult, is superior, I seek to cast aside all snares and
delusions”.

“And what do you do in the world”, asked Master Foo, “that you must strive with
software?”

“I am a builder”, the end user replied, “Many of the houses of this town were
made under my chop”.

Master Foo turned back to the neophyte. “The housecat may mock the tiger”, said
the master, “but doing so will not make his purr into a roar”.

Upon hearing this, the neophyte was enlightened.


## Master Foo and the Programming Prodigy

There was a time when rumors began to reach Master Foo and his students of a
prodigiously gifted programmer, a young man who wandered the length and breadth
of the land performing mighty feats of coding and humiliating all who dared set
their skill against his.

Eventually this prodigy came to visit Master Foo, who received him politely and
offered him tea. The Prodigy accepted with equal politeness and explained the
motive for his visit.

“I have come to you,” he said “seeking a code and design review of my latest
project. For it is of surpassing complexity, and I do not have peers capable of
understanding it. Only an acknowledged master such as yourself (and here the
Prodigy bowed deeply) can have the discernment required.”

Master Foo bowed politely in return and began examining the Prodigy&rsquo;s code.
After some time he raised his eyes from the screen. “This code is at first sight
very impressive,” he said. “It is elegant in design, utilizing original
algorithms of great ingenuity, and appears to be implemented in a craftsmanlike
way which minimizes the possibility of errors.”

The Prodigy looked very pleased at this praise, but Master Foo continued:
“However, I detect one significant flaw.”

“Flaw?” the Prodigy said. “What flaw?”

“This code is difficult to read,” said Master Foo. “It is only thinly commented,
its invariants are not specified, and I see no narrative description of its
architecture or internal data structures anywhere. These problems will seriously
impede your cooperation with other programmers.”

The Prodigy drew himself up haughtily. “I do not seek the cooperation of other
programmers,” he said. “Every time I thought I had found one who might match me
in skill I have been disappointed. Thus, I work alone.”

“But even the hacker who works alone,” said Master Foo, “collaborates with
others, and must constantly communicate clearly to them, lest his work become
confused and lost.”

“Of what others do you speak?” the Prodigy demanded.

Master Foo said: “All your future selves.”

Upon hearing this, the Prodigy was enlightened.


## Master Foo and the Hardware Designer

On one occasion, as Master Foo was traveling to a conference with a few of his
senior disciples, he was accosted by a hardware designer.

The hardware designer said: “It is rumored that you are a great programmer. How
many lines of code do you write per year?”

Master Foo replied with a question: “How many square inches of silicon do you
lay out per year?”

“Why&#x2026;we hardware designers never measure our work in that way,” the man said.

“And why not?” Master Foo inquired.

“If we did so,” the hardware designer replied, “we would be tempted to design
chips so large that they cannot be fabricated - and, if they were fabricated,
their overwhelming complexity would make it be impossible to generate proper
test vectors for them.”

Master Foo smiled, and bowed to the hardware designer.

In that moment, the hardware designer achieved enlightenment.


<a id="the-tao-of-programming"></a>

# The Tao of Programming

Translated by Geoffrey James

Transcribed by Duke Hillard

Transmitted by Anupam Trivedi, Sajitha Tampi, and Meghshyam Jagannath

Last substantive modification <span class="timestamp-wrapper"><span class="timestamp">&lt;1996-04-10 Wed&gt; </span></span> or earlier; [Kragen](http://canonical.org/~kragen/) link updated
<span class="timestamp-wrapper"><span class="timestamp">&lt;2016-11-30 Wed&gt;</span></span>


## Book 1 &#x2013; The Silent Void

---

Thus spake the master programmer:

> &ldquo;When you have learned to snatch the error code from the trap frame, it will be
> time for you to leave.&rdquo;

---

Something mysterious is formed, born in the silent void. Waiting alone and
unmoving, it is at once still and yet in constant motion. It is the source of
all programs. I do not know its name, so I will call it the Tao of Programming.

If the Tao is great, then the operating system is great. If the operating system
is great, then the compiler is great. If the compiler is great, then the
application is great. The user is pleased and there exists harmony in the world.

The Tao of Programming flows far away and returns on the wind of morning.

---

The Tao gave birth to machine language. Machine language gave birth to the
assembler.

The assembler gave birth to the compiler. Now there are ten thousand languages.

Each language has its purpose, however humble. Each language expresses the Yin
and Yang of software. Each language has its place within the Tao.

But do not program in COBOL if you can avoid it.

---

In the beginning was the Tao. The Tao gave birth to Space and Time. Therefore
Space and Time are Yin and Yang of programming.

Programmers that do not comprehend the Tao are always running out of time and
space for their programs. Programmers that comprehend the Tao always have enough
time and space to accomplish their goals.

How could it be otherwise?

---

The wise programmer is told about Tao and follows it. The average programmer is
told about Tao and searches for it. The foolish programmer is told about Tao
and laughs at it.

If it were not for laughter, there would be no Tao.

<p class="verse">
The highest sounds are hardest to hear.<br />
Going forward is a way to retreat.<br />
Great talent shows itself late in life.<br />
Even a perfect program still has bugs.<br />
</p>


## Book 2 &#x2013; The Ancient Masters

Thus spake the master programmer:

> &ldquo;After three days without programming, life becomes meaningless.&rdquo;

---

The programmers of old were mysterious and profound. We cannot fathom their thoughts, so all we do is describe their appearance.

Aware, like a fox crossing the water. Alert, like a general on the battlefield. Kind, like a hostess greeting her guests. Simple, like uncarved blocks of wood. Opaque, like black pools in darkened caves.

Who can tell the secrets of their hearts and minds?

The answer exists only in Tao.

---

Grand Master Turing once dreamed that he was a machine. When he awoke he
exclaimed:

> I don"t know whether I am Turing dreaming that I am a machine, or a machine
> dreaming that I am Turing!

---

A programmer from a very large computer company went to a software conference
and then returned to report to his manager, saying: &ldquo;What sort of programmers
work for other companies? They behaved badly and were unconcerned with
appearances. Their hair was long and unkempt and their clothes were wrinkled
and old. They crashed our hospitality suite and they made rude noises during
my presentation.&rdquo;

The manager said: "I should have never sent you to the conference. Those
programmers live beyond the physical world. They consider life absurd, an
accidental coincidence. They come and go without knowing limitations. Without a
care, they live only for their programs. Why should they bother with social
conventions?

> &ldquo;They are alive within the Tao.&rdquo;

---

A novice asked the Master: &ldquo;Here is a programmer that never designs, documents
or tests his programs. Yet all who know him consider him one of the best
programmers in the world. Why is this?&rdquo;

The Master replies: &ldquo;That programmer has mastered the Tao. He has gone beyond
the need for design; he does not become angry when the system crashes, but
accepts the universe without concern. He has gone beyond the need for
documentation; he no longer cares if anyone else sees his code. He has gone
beyond the need for testing; each of his programs are perfect within themselves,
serene and elegant, their purpose self-evident. Truly, he has entered the
mystery of Tao.&rdquo;


## Book 3 &#x2013; Design

Thus spake the master programmer:

> &ldquo;When the program is being tested, it is too late to make design changes.&rdquo;

---

There once was a man who went to a computer trade show. Each day as he entered,
the man told the guard at the door:

> &ldquo;I am a great thief, renowned for my feats of shoplifting. Be forewarned, for
> this trade show shall not escape unplundered.&rdquo;

This speech disturbed the guard greatly, because there were millions of dollars
of computer equipment inside, so he watched the man carefully. But the man
merely wandered from booth to booth, humming quietly to himself.

When the man left, the guard took him aside and searched his clothes, but
nothing was to be found.

On the next day of the trade show, the man returned and chided the guard saying:
&ldquo;I escaped with a vast booty yesterday, but today will be even better.&rdquo; So the
guard watched him ever more closely, but to no avail.

On the final day of the trade show, the guard could restrain his curiosity no
longer. &ldquo;Sir Thief,&rdquo; he said, &ldquo;I am so perplexed, I cannot live in peace. Please
enlighten me. What is it that you are stealing?&rdquo;

The man smiled. &ldquo;I am stealing ideas,&rdquo; he said.

---

There once was a master programmer who wrote unstructured programs. A novice
programmer, seeking to imitate him, also began to write unstructured programs.
When the novice asked the master to evaluate his progress, the master criticized
him for writing unstructured programs, saying, &ldquo;What is appropriate for the
master is not appropriate for the novice. You must understand the Tao before
transcending structure.&rdquo;

---

There was once a programmer who was attached to the court of the warlord of Wu.
The warlord asked the programmer: &ldquo;Which is easier to design: an accounting
package or an operating system?&rdquo;

&ldquo;An operating system,&rdquo; replied the programmer.

The warlord uttered an exclamation of disbelief. &ldquo;Surely an accounting package
is trivial next to the complexity of an operating system,&rdquo; he said.

&ldquo;Not so,&rdquo; said the programmer, &ldquo;when designing an accounting package, the
programmer operates as a mediator between people having different ideas: how it
must operate, how its reports must appear, and how it must conform to the tax
laws. By contrast, an operating system is not limited by outside appearances.
When designing an operating system, the programmer seeks the simplest harmony
between machine and ideas. This is why an operating system is easier to design.&rdquo;

The warlord of Wu nodded and smiled. &ldquo;That is all good and well, but which is
easier to debug?&rdquo;

The programmer made no reply.

---

A manager went to the master programmer and showed him the requirements
document for a new application. The manager asked the master: &ldquo;How long will it
take to design this system if I assign five programmers to it?&rdquo;

&ldquo;It will take one year,&rdquo; said the master promptly.

&ldquo;But we need this system immediately or even sooner! How long will it take if I
assign ten programmers to it?&rdquo;

The master programmer frowned. &ldquo;In that case, it will take two years.&rdquo;

&ldquo;And what if I assign a hundred programmers to it?&rdquo;

The master programmer shrugged. &ldquo;Then the design will never be completed,&rdquo; he
said.


## Book 4 &#x2013; Coding

Thus spake the master programmer:

> &ldquo;A well-written program is its own heaven; a poorly-written program is its own hell.&rdquo;

---

A program should be light and agile, its subroutines connected like a string of
pearls. The spirit and intent of the program should be retained throughout.
There should be neither too little or too much, neither needless loops nor
useless variables, neither lack of structure nor overwhelming rigidity.

A program should follow the &ldquo;Law of Least Astonishment&rdquo;. What is this law? It is
simply that the program should always respond to the user in the way that
astonishes him least.

A program, no matter how complex, should act as a single unit. The program
should be directed by the logic within rather than by outward appearances.

If the program fails in these requirements, it will be in a state of disorder
and confusion. The only way to correct this is to rewrite the program.

---

A novice asked the master: &ldquo;I have a program that sometime runs and sometimes
aborts. I have followed the rules of programming, yet I am totally baffled.
What is the reason for this?&rdquo;

The master replied: "You are confused because you do not understand Tao. Only a
fool expects rational behavior from his fellow humans. Why do you expect it from
a machine that humans have constructed? Computers simulate determinism; only Tao
is perfect.

&ldquo;The rules of programming are transitory; only Tao is eternal. Therefore you
must contemplate Tao before you receive enlightenment.&rdquo;

&ldquo;But how will I know when I have received enlightenment?&rdquo; asked the novice.

&ldquo;Your program will then run correctly,&rdquo; replied the master.

---

A master was explaining the nature of Tao of to one of his novices. &ldquo;The Tao is
embodied in all software - regardless of how insignificant,&rdquo; said the master.

&ldquo;Is the Tao in a hand-held calculator?&rdquo; asked the novice.

&ldquo;It is,&rdquo; came the reply.

&ldquo;Is the Tao in a video game?&rdquo; continued the novice.

&ldquo;It is even in a video game,&rdquo; said the master.

&ldquo;And is the Tao in the DOS for a personal computer?&rdquo;

The master coughed and shifted his position slightly. &ldquo;The lesson is over for
today,&rdquo; he said.

---

Prince Wang"s programmer was coding software. His fingers danced upon the
keyboard. The program compiled without an error message, and the program ran
like a gentle wind.

&ldquo;Excellent!&rdquo; the Prince exclaimed, &ldquo;Your technique is faultless!&rdquo;

&ldquo;Technique?&rdquo; said the programmer turning from his terminal, &ldquo;What I follow is
Tao - beyond all techniques! When I first began to program I would see before me
the whole problem in one mass. After three years I no longer saw this mass.
Instead, I used subroutines. But now I see nothing. My whole being exists in a
formless void. My senses are idle. My spirit, free to work without plan, follows
its own instinct. In short, my program writes itself. True, sometimes there are
difficult problems. I see them coming, I slow down, I watch silently. Then I
change a single line of code and the difficulties vanish like puffs of idle
smoke. I then compile the program. I sit still and let the joy of the work fill
my being. I close my eyes for a moment and then log off.&rdquo;

Prince Wang said, &ldquo;Would that all of my programmers were as wise!&rdquo;


<a id="the-unix-power-clasic"></a>

# The Unix Power Classic


<a id="ai-koans"></a>

# AI Koans


<a id="logintaka"></a>

# LoginTaka


<a id="tales-of-zen-master-greg"></a>

# Tales of Zen Master Greg

