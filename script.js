document.addEventListener("DOMContentLoaded", function () {
  console.log("script.js loaded successfully");

  var statusBox = document.getElementById("jsStatus");
  if (statusBox) {
    statusBox.textContent = "JavaScript status: loaded successfully. Interactions are active.";
  }

  var scenarios = {
    baseline: {
      title: "Scenario 1: Baseline - Uneven Adaptation",
      paragraphs: [
        "The baseline scenario is the most likely path. By 2030, most Australian firms use generative AI in some form, especially for writing, customer support, coding assistance, internal search, compliance summaries and marketing content. Adoption is broad but shallow. Many firms treat AI as a productivity add-on rather than as a reason to redesign work.",
        "In this future, productivity improves, but not dramatically. AI reduces the time spent on routine cognitive tasks, but firms still face the jagged frontier problem: AI performs well on some tasks and badly on others that require context, tacit knowledge or accountability. Workers spend more time checking, editing and integrating AI outputs.",
        "Employment does not collapse. However, junior administrative, customer service, marketing, legal support and analyst roles face pressure. Firms do not necessarily fire large numbers of workers, but they slow hiring, combine roles and expect fewer employees to produce more output."
      ]
    },
    upside: {
      title: "Scenario 2: Upside - Augmented Australia",
      paragraphs: [
        "The upside scenario assumes that Australia treats AI as a general-purpose technology requiring complementary investment. Firms, education providers and government coordinate around augmentation rather than simple substitution. AI becomes a tool for raising worker capability, not merely a device for reducing headcount.",
        "In this future, the Australian Government funds an AI Task Transition Dashboard through Jobs and Skills Australia. The dashboard tracks which tasks are exposed to automation, which are likely to be augmented, and which occupations need transition support. Training is practical rather than generic.",
        "By 2030, the upside labour market has higher productivity and broader participation. Junior roles are redesigned rather than removed. AI handles routine production while humans specialise in judgement, trust and coordination."
      ]
    },
    downside: {
      title: "Scenario 3: Downside - Displacement Spiral",
      paragraphs: [
        "The downside scenario is not the most likely, but it is the main risk policymakers should prevent. In this future, firms use AI primarily as a cost-cutting tool. Adoption is driven by short-term margin pressure, not long-term capability building.",
        "By 2030, many firms have reduced hiring in entry-level white-collar roles. Graduates find it harder to get the first job that traditionally provided training and experience. Senior workers remain valuable, but the pipeline into senior roles weakens.",
        "Algorithmic management expands in this scenario. Firms use AI to monitor productivity, allocate shifts, screen applicants and evaluate performance. Distribution also worsens: AI-generated productivity appears in firm output and profit, but not necessarily in wages."
      ]
    }
  };

  var scenarioButtons = document.querySelectorAll(".scenario-button");
  var scenarioDisplay = document.getElementById("scenarioDisplay");

  if (scenarioButtons.length > 0 && scenarioDisplay) {
    for (var i = 0; i < scenarioButtons.length; i++) {
      scenarioButtons[i].addEventListener("click", function () {
        var selectedScenario = this.getAttribute("data-scenario");
        var scenario = scenarios[selectedScenario];

        for (var j = 0; j < scenarioButtons.length; j++) {
          scenarioButtons[j].classList.remove("active");
        }

        this.classList.add("active");

        var scenarioHTML = "<h3>" + scenario.title + "</h3>";

        for (var k = 0; k < scenario.paragraphs.length; k++) {
          scenarioHTML += "<p>" + scenario.paragraphs[k] + "</p>";
        }

        scenarioDisplay.innerHTML = scenarioHTML;
      });
    }
  }

  var adoptionSlider = document.getElementById("adoptionSlider");
  var adoptionValue = document.getElementById("adoptionValue");
  var productivityOutput = document.getElementById("productivityOutput");
  var displacementOutput = document.getElementById("displacementOutput");
  var trainingOutput = document.getElementById("trainingOutput");

  function updateAdoptionModel() {
    var adoption = Number(adoptionSlider.value);
    var productivityGain = Math.round(25 + adoption * 0.6);
    var displacementRisk = Math.round(15 + adoption * 0.65);
    var trainingNeed = Math.round(35 + adoption * 0.5);

    adoptionValue.textContent = adoption;
    productivityOutput.textContent = productivityGain;
    displacementOutput.textContent = displacementRisk;
    trainingOutput.textContent = trainingNeed;
  }

  if (adoptionSlider && adoptionValue && productivityOutput && displacementOutput && trainingOutput) {
    adoptionSlider.addEventListener("input", updateAdoptionModel);
    updateAdoptionModel();
  }

  var policies = {
    dashboard: {
      title: "AI Task Dashboard",
      purpose: "Purpose: Build task-level labour-market intelligence so policymakers can identify which tasks are exposed, which are augmented, and where transition support is needed.",
      benefit: "Expected benefit: Better targeting of training funds, clearer evidence for policy design, and earlier warning signals for occupations under pressure.",
      tradeoff: "Trade-off: Requires regular data updates and coordination between government, firms, training providers and workers."
    },
    accounts: {
      title: "AI Transition Accounts",
      purpose: "Purpose: Provide workers in high-exposure roles with funding for short, practical training in AI literacy, verification, data judgement and communication.",
      benefit: "Expected benefit: Helps workers move from tasks AI can perform cheaply toward tasks where human judgement, trust and domain knowledge remain valuable.",
      tradeoff: "Trade-off: Training may be ineffective if it is too generic or disconnected from realistic job-transition pathways."
    },
    grants: {
      title: "AI Augmentation Grants",
      purpose: "Purpose: Support firms that redesign jobs around complementarity rather than simply using AI to reduce headcount.",
      benefit: "Expected benefit: Encourages productivity-enhancing adoption, especially among small and medium-sized firms that lack internal AI capability.",
      tradeoff: "Trade-off: Poorly designed grants could subsidise software purchases without changing work practices or improving worker outcomes."
    },
    transparency: {
      title: "Workplace AI Transparency",
      purpose: "Purpose: Require disclosure and appeal mechanisms when AI is used for hiring, firing, scheduling, performance scoring or surveillance.",
      benefit: "Expected benefit: Reduces information asymmetry between employers and workers and improves accountability in high-stakes algorithmic management.",
      tradeoff: "Trade-off: Rules must be targeted carefully so ordinary productivity tools are not overregulated."
    }
  };

  var policyCards = document.querySelectorAll(".policy-card");
  var policyDisplay = document.getElementById("policyDisplay");

  if (policyCards.length > 0 && policyDisplay) {
    for (var p = 0; p < policyCards.length; p++) {
      policyCards[p].addEventListener("click", function () {
        var selectedPolicy = this.getAttribute("data-policy");
        var policy = policies[selectedPolicy];

        for (var q = 0; q < policyCards.length; q++) {
          policyCards[q].classList.remove("active");
        }

        this.classList.add("active");

        var policyHTML = "<h4>" + policy.title + "</h4>";
        policyHTML += "<p>" + policy.purpose + "</p>";
        policyHTML += "<p>" + policy.benefit + "</p>";
        policyHTML += "<p>" + policy.tradeoff + "</p>";

        policyDisplay.innerHTML = policyHTML;
      });
    }
  }

  var sections = document.querySelectorAll(".content-section");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-section");
          }
        });
      },
      { threshold: 0.12 }
    );

    for (var s = 0; s < sections.length; s++) {
      sections[s].classList.add("hidden-section");
      observer.observe(sections[s]);
    }
  }
});
