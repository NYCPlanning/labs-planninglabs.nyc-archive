---
title: Open source policy
permalink: /open-source-policy/
layout: primary
lead:
---

This is a copy of the NYC Planning Labs open source policy. The [official document lives in GitHub](https://github.com/nycplanning/labs-open-source-policy/blob/master/policy.md). If you would like to comment or suggest a change to the policy, please do so there.

### NYC Planning Labs: An open source team

[NYC Planning Labs](https://planninglabs.nyc), a digital services delivery team within the [New York City Department of City Planning](http://www.nyc.gov/planning), develops in-house digital solutions to help divisions accomplish their missions. This requires flexibility in how we code, with a focus on lowering costs, increasing productivity, and reducing external dependencies.

The default position of NYC Planning Labs when developing new projects is to:

1. Use Free and Open Source Software (FOSS), which is software that does not charge users a purchase or licensing fee for modifying or redistributing the source code, in our projects and contribute back to the open source community.
2. Develop our work in the open.
3. Publish publicly all source code created or modified by NYC Planning Labs, whether developed in-house by  staff or through contracts negotiated by NYC Planning Labs.

### Benefits

Using FOSS allows for product customization, advances interoperability between tools, and improves the overall quality of the final product. Other benefits include:

1. **Flexible usage.** The benefits of using FOSS compel NYC Planning Labs to meet user needs by modifying existing or creating new FOSS. FOSS is particularly suitable for rapid prototyping and experimentation. The testing process generates minimal costs, and the process encourages the identification and elimination of defects not recognized by the original development team.

2. **Community involvement.** Publicly available source code enables continuous and broad peer review. Whether simply publishing the completed code or opening the development process, the practice of expanding the review and testing process to a wider audience&mdash;beyond the development team&mdash;ensures increased software reliability and security. Developing in the open also allows for other opinions to help adjust the direction of a product to maximize its usefulness to the community it serves.

3. **Cost-savings.** The ability to modify FOSS enables NYC Planning Labs to respond rapidly to changing missions and markets. Support and maintenance of open source code&mdash;as opposed to more burdensome usages of proprietary software&mdash;provides a real cost advantage where multiple copies of software are required, or when the user base grows. The total cost of ownership is shared with a community, rather than solely NYC Planning Labs.

4. **Reusability.** The code we create belongs to the public as a part of the public domain. The code we work on was paid for by the American people, but the end-product is not the only way they should be able to interact with their government. By coding in FOSS, we help populate a larger commons that cities, states, businesses, and individuals can participate in. This creates real economic value by lowering the burden of replicating similar work or by allowing the private sector to build off of and create new businesses around code developed at NYC Planning Labs.

### Maximizing community involvement and reuse

Active involvement from the open source community is integral to the success of open source code. NYC Planning Labs will be an active contributor to FOSS projects that it or its clients utilize.

Code written entirely by NYC Planning Labs staff will be dedicated to the public domain. In addition, any contracts NYC Planning Labs enters into, where others will develop software on NYC Planning Labs's behalf, will ensure that all results are dedicated to the public domain. In general, all discussion in this document about the licensing of work of NYC Planning Labs's contractors means that NYC Planning Labs will ensure that their contracts guarantee those terms.

NYC Planning Labs encourages contributions to its open source projects, whether it be code, commentary, bug reports, feature requests, or overall strategic direction.

Forks or clones of our code repositories are free to be re-distributed. This means code created by NYC Planning Labs can be integrated into work that is under a more restrictive license, even those that are not considered open source licenses.

This changes when our code repositories include code that was not created by NYC Planning Labs and carries an open license. Code previously released under an open source license and then modified by NYC Planning Labs or its contractors is considered a ["joint work"] [4] and must be released under terms permitted by the original open source license.

  [4]: http://www.copyright.gov/title17/92chap1.html#101 "Joint Work"

The public can use our code as the basis of wholly proprietary and commercial systems. NYC Planning Labs would appreciate that users of our code disclose its lineage, but NYC Planning Labs maintains no legal right to require disclosure. Notifications that our work is used in a new system are always greatly appreciated.

### Open source licenses

As previously mentioned, most work generated at NYC Planning Labs falls within the U.S. public domain.

For our international colleagues, NYC Planning Labs also permanently waives all copyright and related rights worldwide to code created by NYC Planning Labs or its contractors.

Our [default LICENSE file]({{ site.github_repo }}/LICENSE.md) for projects acknowledges that our work is in the US public domain, and uses [CC0](https://creativecommons.org/publicdomain/zero/1.0/) to waive copyright internationally.

Our [default CONTRIBUTING file]({{ site.github_repo }}/CONTRIBUTING.md) informs contributors that their contributions will be licensed under the same terms.

However, certain projects will require the usage of licensed open source software not created by NYC Planning Labs. Some open source licenses make source code available under different terms and conditions. These terms and conditions specify how the code may be used, modified, or shared. When users modify NYC Planning Labs code, they should review and understand the terms of the open source license in question.

Each project may need to modify or extend the above LICENSE and CONTRIBUTING files as needed for its own circumstances.

### Distribution of code

There is a misconception that FOSS that is distributed to the public should not be integrated or modified for use in sensitive systems. On the contrary, FOSS is often preferred for use in sensitive systems, due in part to its increased auditability. In other words, security in FOSS must be designed never to rely on obscurity in how the code works.

In addition, while open source licenses permit the user to modify FOSS for internal use without obligating them to distribute source code to the public, when the user chooses to distribute the modified FOSS outside the user's organization, then the code is subject to whatever license it carries.

### Exceptions

The only conditions where code shall not be developed and released in the open are:

* The U.S. Government does not have the rights to reproduce and release the item.

* The public release of the item is restricted by other law or regulation, such as the Export Administration Regulations or the International Traffic in Arms Regulation.

These decisions will be made as needed by the NYC Planning Labs DevOps team, which will lead an interdisciplinary team to review the conditions under which code will not be made available publicly. Any further exemptions will be rare, documented publicly, and the result of compelling interest.

If an existing solution cannot be found in the open source community, NYC Planning Labs may consider other options, including creating an open source solution itself. Ultimately, the software that best meets the needs and mission of NYC Planning Labs should be used.

### Thanks

NYC Planning Labs would like to thank 18F, the Consumer Financial Protection Bureau, Department of Defense, and Office of Management and Budget for their work in blazing the path for the use of FOSS in Government.

### Future changes

This policy is a living document. NYC Planning Labs expects to make changes to this policy in the future, and we welcome [issues](https://github.com/nycplanning/labs-open-source-policy/issues) and pull requests. To contact us privately, email <a href="mailto:labs@planning.nyc.gov">labs@planning.nyc.gov</a>.
