# Support tickets 
Please read the tickets here, and reply by removing replace this with your response,
replacing it with your response.

Please make sure you don't change anything else in this file. Just add your responses to the
proper sections. Also, please make sure your editor is saving the file using the UTF-8
character encoding.

Having trouble getting an answer? That's okay! Walk us through your research technique,
what you've tried, and where you're getting stuck so we can see your thought process
instead.

Good luck!

# Ticket #1: Rejected pull request from fork

To start, I have to say I LOVE GITHUB. You guys rock. I was at your 4th birthday party,
thanks for the cupcake and booze!

Anyway, here's my problem. I sent a pull request to technoweenie, and he rejected it because
my master branch is out of sync with his master. What can I do to fix this?

Help me supportocat, you're my only hope!

/.Steve

Hint: You'll want to address their question, and you could add an explanation of topic
branches as a better workflow.

**Ticket #1 response:** 

Hello /.Steve,

I hope we will see you at our next year's celebration.

To resolve this;
fetch all commits from upstream repository
`$ git fetch upstream`

Check out your local master branch.
`$ git checkout master`

Merge the changes from upstream/master into your local master branch. 
`$ git merge upstream/master`
For more information see [Article](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

Regards, Xavier.

# Ticket #2: Syncing internal server and GitHub?
Hi GitHub! My company has an internal Git server used for deployments, we use GitHub,
and I work on a local copy of the repository. For workflow purposes, how do I sync my
repository to GitHub and the internal Git server?
Thanks,
vmg

Hint: One common option is Git remotes. There are others!

**Ticket #2 response:**

Hello Vmg,

Since you use github for collaboration and your internal Git server for deployment.

I would suggest you add the repo by using the `$ git remote` like `$ git remote add internal URL`

we can manully push these different repo.

For more information see [Article](https://help.github.com/en/github/using-git/adding-a-remote)

# Ticket #3: Unhappy about forking

JamesTK here, I have another question.

One of my dev collaborator forked my private repo without explicit permission to do so... is
that typical? I am surprised that the system did not notify me if it was okay to grant the fork
permission. Is there a way to setup permissions of this sort? Also, other than asking the
collaborator to delete the forked repo, can I actually delete it?

Thanks, jamestk
Notes:

You've checked the account in our admin view, he only has one personal repository
(jamestk/tribbles), which has one collaborator. Any documentation you may need is available
on help.github.com.

**Ticket #3 response:**
 Hello Jamestk,

By adding a collaborator on a private repository, owner grant the collaboratr write access to these repos.
Collaborators can't have read-only access to personal repos.

See[Article](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository#collaborator-access-on-a-repository-owned-by-a-user-account)

# Love to know more about yourself
We'd also love if you could share more about yourself so the team can get to know you
better! If you could fill the following out that would be great:

**Name?**

Xavier Ihee

**Location?**

Lagos State, Nigeria

**What's an impressionable experience you've had with customer service/support, and why?**
While in isolation, I have lost acces to my account and could no loger make purches and  

**Tell us about a time where you helped someone.**

A time I helped someone?! well I help people all day. I was on a call with customer once he needed help with his 

**What appeals to you about GitHub, as a company you'd potentially be working for?**

I strongly believe in collaboration, seeing the position of tehcnical support with your company I knew I had to apply. I saw the teamwork, the dynamic growth of the company over time has led me to believe that the team is definitly doing something right.I love working with a great team to achieve a common goal, and I know my background in technical support has prepared me for this role. 
I look forward to becoming a valued teamplayer on this fantastic team.

**How would you describe what GitHub does to a non-technical person?**

Github is an application that helps not just programmers but other end users store files and and track those changes while collaborating on it.

**What motivates you to work in support?**

I am passionate about many things, but one key factor for me is problem-solving. It helps me think, research, communicate, and follow recent trends in technology. This for me is the beginning of an interesting story.

What I really find thrilling is the fact that at the end of the day I can effectively and efficiently make an impact. I really think that it is problem-solving skills that made me find my way to being a support professional.


Thanks for taking the time and effort to tell us more about yourself. We look forward to reading your responses.

# Final step
Make sure you save this file. And that your editor is saving it using the UTF-8 character
encoding. Go back to the email you received from us, and upload this file to the unique link
you will find at the bottom of the email.
Thanks!
