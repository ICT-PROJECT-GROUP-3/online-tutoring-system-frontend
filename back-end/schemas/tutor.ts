export default {
    name: 'tutor',
    title: 'Tutor',
    type: 'document',
    fields: [
      {
        name: 'fullname',
        title: 'Full Name',
        type: 'string',
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [
            {
                type: 'block'
            }
        ]
      },
      {
        name: 'languages',
        title: 'Languages',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
      {
        name: 'area_of_expertise',
        title: 'Area of Expertise',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'can_travel',
        title: 'Can Travel',
        type: 'boolean',
      },
      {
        name: 'home_teaching',
        title: 'Home Teaching',
        type: 'boolean',
      },
      {
        name: 'homework_help',
        title: 'Homework Help',
        type: 'boolean',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'teaching_experience',
        title: 'Teaching Experience',
        type: 'array',
        of: [
            {
                type: 'string'
            }
        ]
      },
      {
        name: 'total_teaching_experience',
        title: 'Total Teaching Experience',
        type: 'number'
      },
      {
        name: 'registration_date',
        title: 'Registration Date',
        type: 'date',
      },
      {
        name: 'date_of_birth',
        title: 'Date of Birth',
        type: 'date',
      },
      {
        name: 'gender',
        title: 'Gender',
        type: 'string'
      },
      {
        name: 'teaches_online',
        title: 'Teaches Online',
        type: 'boolean',
      },
      {
        name: 'education_qualification',
        title: 'Education Qualification',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
      {
        name: 'work_experience',
        title: 'Work Experience',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string',
      },
      {
        name: 'phone_number',
        title: 'Phone Nummber',
        type: 'string',
      },
      {
        name: 'certification_of_credentials',
        title: 'Certification of Credentials',
        type: 'array',
        of: [
            {
                type: 'image'
            }
        ]
      },
      {
        name: 'email',
        title: 'Email',
  
        type: 'email',
      },
      {
        name: 'platform',
        title: 'Platform',
        type: 'string'
      },
      {
        name: 'weekly_availability',
        title: 'Weekly Availability',
        type: 'number'
      },
      {
        name: 'time_slots',
        title: "Time Slots",
        type: "array",
        of: [
            {
                type: 'datetime'
            }
        ]
      },
      {
        name: 'last_login',
        title: 'Last Login',
        type: 'datetime'
      },
      {
        name: 'maximum_number_of_sessions',
        title: 'Maximum Number of Sessions',
        type: 'number'
      },
      {
        name: 'reference',
        title: 'Reference',
        type: 'array',
        of: [
            {
                type: 'string'
            }
        ]
      },
      {
        name: 'session_duration',
        title: 'Session Duration',
        type: 'number'
      }
    ],
  }
  