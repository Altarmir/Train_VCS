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

Kindly see the [Article](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

Also, see documentation on [Branch](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches) here.

Regards, 

Xavier.

# Ticket #2: Syncing internal server and GitHub?
Hi GitHub! My company has an internal Git server used for deployments, we use GitHub,
and I work on a local copy of the repository. For workflow purposes, how do I sync my
repository to GitHub and the internal Git server?
Thanks,
vmg

Hint: One common option is Git remotes. There are others!

**Ticket #2 response:**

Hello Vmg,

Since you use Github for collaboration and your internal Git server for deployment.

I would suggest you add the repo by using the `$ git remote` like `$ git remote add internal URL`

we can manually push these different repositories.

For more information see the [Article](https://help.github.com/en/github/using-git/adding-a-remote)

Regards,

Xavier

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

Regards,

Xavier

# Love to know more about yourself
We'd also love if you could share more about yourself so the team can get to know you
better! If you could fill the following out that would be great:

**Name?**

Xavier Ihee

**Location?**

Lagos State, Nigeria

**What's an impressionable experience you've had with customer service/support, and why?**

As a student who had a day left to make payment of tuition fee for me to partake in my final exams. I had issue with my debit card and couldn’t make the payment online. I visited the bank and on getting there the network was down and all transactions were left pending which left me extremely helpless as it was just about an hour left for the bank to close for the day. I had approached one of the customer service representatives and explained my ordeal to her. She really felt sad about the situation and reached out to her superiors who in turned communicated this with the branch manager. A call was made to other branch with high priority to run some checks on my bank account to see if I had the said amount of money and the total sum was cashed out for me pending the network glitch was sorted. 
With this I was able to make payment of my tuition fee same day and partake in my final exams.The customer service representative went above and beyond her designation to help a helpless student in need. 

**Tell us about a time where you helped someone.**

As a support engineer the bulk part of my job is to render assistant to customers who need them. I have rendered help to an average of 1000 end users in less than 6 months on the job. I had once helped an extremely irate customer who couldn’t access her emails for about a week because she didn’t have her domain set up properly. I had to apologize, pacify and gave my word that her issue will be resolved in the earliest time possible with her collaboration. I asked her necessary questions which helped us diagnose what the issue was, and I then directed her on the necessary steps to take via a screen sharing session which helped us resolve the issue and she got her emails coming through. She was very pleased with the support provided as she could now has access to all her emails; she was so pleased she offered to buy me some ice cream.

**What appeals to you about GitHub, as a company you'd potentially be working for?**

I strongly believe in collaboration, and GitHub is a platform where people work together, share ideas, and learn from each other to achieve amazing things. 
Working with people has been part of my daily life and what faster way to achieve this than with the aid of a collaboration tool/ platform?  
GitHub is a typical example of what makes teams achieve goals by sheer collaboration through seamlessly merging individual tasks.


**How would you describe what GitHub does to a non-technical person?**

Github is an online repository that allows effective collaboration and file management which makes it easy to track, store, and modify files.

**What motivates you to work in support?**

I am passionate about many things, but one key factor for me is problem-solving. It helps me think, research, communicate, and follow recent trends in technology. This for me is the beginning of an interesting story.

What I find thrilling is the fact that at the end of the day I can effectively and efficiently make an impact. I really think that it is problem-solving skills that made me find my way to being a support professional.


Thanks for taking the time and effort to tell us more about yourself. We look forward to reading your responses.

# Final step
Make sure you save this file. And that your editor is saving it using the UTF-8 character
encoding. Go back to the email you received from us, and upload this file to the unique link
you will find at the bottom of the email.
Thanks!
