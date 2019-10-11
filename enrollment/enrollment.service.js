class EnrollmentService {

  constructor($q, $rootScope) {
    "ngInject"
    this.$q = $q;
    this.$rootScope = $rootScope;
  }

  getSteps() {
    return this.$q.resolve([
      {
        title: "Membership Eligibility",
        order: 1,
        id: "MEMBERSHIP",
        state: "membership",
        parts: [
          {
            title: "Employee",
            text: "All employees of the Tyson Company are elligible, no matter where you live. Hello future member",
            imgURL: "",
            type: "EMPLOYEE"
          },
          {
            title: "Contigent and Contract Worker",
            text: "Those who provide support to The Tyson Company. A Tyson.com email address is required.",
            imgURL: "",
            type: "CONTRACT"
          },
          {
            title: "Immediate Family of Member",
            text: "Spouses, children, parents, siblings, grandparents, grandchildren, and step-relationships. Hello fam!",
            imgURL: "",
            type: "FAMILY"
          },
          {
            title: "Domestic Partner",
            text: "Domestic partners qualify if the existing member lives in the same residence and maintains a single economic unit with you",
            imgURL: "",
            type: "DOMESTIC_PARTNER"
          },
        ]

      },
      {
        title: "Identity Check",
        order: 2,
        id: "IDENTITY",
        state: "identity",
        parts: [
          {
            text: "<span>What's your first name?</span>",
            id: "1",
            key: "firstName",
            defaultValue: ""
          },
          {
            text: "<span>What's your last name?</span>",
            id: "2",
            key: "lastName",
            defaultValue: ""
          },
          {
            text: "What's your tyson.com <strong>email address</strong>",
            id: "3",
            key: "email",
            defaultValue: ""
          },
          {
            text: "What's your <strong>phone number</strong>?",
            id: "4",
            key: "phone",
            defaultValue: ""
          },
          {
            text: "What's your <strong>social security number</strong>",
            id: "5",
            key: "ssn",
            defaultValue: ""
          }
        ]
      },
      {
        title: "Fund Your Account",
        order: 3,
        id: "FUND"
      },
      {
        title: "Digital Banking Setup",
        order: 4,
        id: "DIGITAL"
      },
      {
        title: "The Legal Stuff",
        order: 5,
        id: "LEGAL"
      }
    ]);
  }

  submitMembership(membership) {
    this.membership = membership;
    this.advanceEnrollment("identity");
  }

  submitIdentity(identity) {
    this.identity = identity;
    this.advanceEnrollment("funding");
  }

  advanceEnrollment(state) {
    this.$rootScope.$broadcast("advance-enrollment", state);
  }
}

export default EnrollmentService