const ut = require("@xtalk/db/base-util")

// statsapi.list.view-brand/brand-all [14] 
var brand_all = {
  "input":[],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_all",
  "flags":{"super":true},
  "view":{
    "table":"Brand",
    "type":"select",
    "tag":"all",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":null,
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-all-as-owner [14] 
var brand_all_as_owner = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_all_as_owner",
  "flags":{"personal":true},
  "view":{
    "table":"Brand",
    "type":"select",
    "tag":"all_as_owner",
    "access":{
      "symbol":"statsdb.api.core.query_brand/brand_access_is_owner",
      "relation":"reverse",
      "query":{"clause":{"__deleted__":false,"owner":"{{<%>}}"}},
      "roles":{"brand.owner":true,"brand.member":true,"brand.admin":true}
    },
    "query":{"__deleted__":false,"owner":"{{i_account_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-all-as-admin [14] 
var brand_all_as_admin = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_all_as_admin",
  "flags":{"personal":true},
  "view":{
    "table":"Brand",
    "type":"select",
    "tag":"all_as_admin",
    "access":{
      "symbol":"statsdb.api.core.query_brand/brand_access_is_admin",
      "relation":"reverse",
      "query":{
        "clause":[
          {"owner":"{{<%>}}","__deleted__":false},
          {
          "__deleted__":false,
          "access":{"entries":{"role":"admin","account":"{{<%>}}"}}
        }
        ]
      },
      "roles":{"brand.member":true,"brand.admin":true}
    },
    "query":[
      {"owner":"{{i_account_id}}","__deleted__":false},
      {
      "__deleted__":false,
      "access":{"entries":{"role":"admin","account":"{{i_account_id}}"}}
    }
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-all-as-member [14] 
var brand_all_as_member = {
  "input":[{"symbol":"i_account_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_all_as_member",
  "flags":{"personal":true},
  "view":{
    "table":"Brand",
    "type":"select",
    "tag":"all_as_member",
    "access":{
      "symbol":"statsdb.api.core.query_brand/brand_access_is_member",
      "relation":"reverse",
      "query":{
        "clause":[
          {"owner":"{{<%>}}","__deleted__":false},
          {
          "__deleted__":false,
          "access":{"entries":{"account":"{{<%>}}"}}
        }
        ]
      },
      "roles":{"brand.member":true}
    },
    "query":[
      {"owner":"{{i_account_id}}","__deleted__":false},
      {
      "__deleted__":false,
      "access":{"entries":{"account":"{{i_account_id}}"}}
    }
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-by-name [14] 
var brand_by_name = {
  "input":[{"symbol":"i_name","type":"text"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_by_name",
  "flags":{"public":true},
  "view":{
    "table":"Brand",
    "type":"select",
    "tag":"by_name",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"name":"{{i_name}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-affiliation-by-organisation [14] 
var brand_affiliation_by_organisation = {
  "input":[{"symbol":"i_organisation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_affiliation_by_organisation",
  "flags":{},
  "view":{
    "table":"BrandAffiliation",
    "type":"select",
    "tag":"by_organisation",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"organisation":"{{i_organisation_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-affiliation-by-organisation-bulk [14] 
var brand_affiliation_by_organisation_bulk = {
  "input":[{"symbol":"i_organisation_ids","type":"jsonb"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_affiliation_by_organisation_bulk",
  "flags":{},
  "view":{
    "table":"BrandAffiliation",
    "type":"select",
    "tag":"by_organisation_bulk",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "organisation":[
        "in",
        {
        "::":"sql/select",
        "args":[
          {
          "::":"sql/fn",
          "name":"uuid",
          "args":[
            {
            "::":"sql/fn",
            "name":"jsonb_array_elements_text",
            "args":[{"::":"sql/arg","name":"{{i_organisation_ids}}"}]
          }
          ]
        }
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-affiliation-by-brand [14] 
var brand_affiliation_by_brand = {
  "input":[{"symbol":"i_brand_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_affiliation_by_brand",
  "flags":{},
  "view":{
    "table":"BrandAffiliation",
    "type":"select",
    "tag":"by_brand",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"brand":"{{i_brand_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-affiliation-by-brand-bulk [14] 
var brand_affiliation_by_brand_bulk = {
  "input":[{"symbol":"i_brand_ids","type":"jsonb"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_affiliation_by_brand_bulk",
  "flags":{},
  "view":{
    "table":"BrandAffiliation",
    "type":"select",
    "tag":"by_brand_bulk",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "brand":[
        "in",
        {
        "::":"sql/select",
        "args":[
          {
          "::":"sql/fn",
          "name":"uuid",
          "args":[
            {
            "::":"sql/fn",
            "name":"jsonb_array_elements_text",
            "args":[{"::":"sql/arg","name":"{{i_brand_ids}}"}]
          }
          ]
        }
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-topic-sponsorship-by-topic [14] 
var brand_topic_sponsorship_by_topic = {
  "input":[{"symbol":"i_topic_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_topic_sponsorship_by_topic",
  "flags":{},
  "view":{
    "table":"BrandTopicSponsorship",
    "type":"select",
    "tag":"by_topic",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{"topic":"{{i_topic_id}}"},
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-topic-sponsorship-by-brand [14] 
var brand_topic_sponsorship_by_brand = {
  "input":[
    {"symbol":"i_brand_id","type":"uuid"},
    {"symbol":"i_statuses","type":"jsonb"}
  ],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_topic_sponsorship_by_brand",
  "flags":{},
  "view":{
    "table":"BrandTopicSponsorship",
    "type":"select",
    "tag":"by_brand",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":{
      "brand":"{{i_brand_id}}",
      "status":[
        "in",
        {
        "::":"sql/select",
        "args":[
          {
          "::":"sql/cast",
          "args":[
            {
            "::":"sql/fn",
            "name":"jsonb_array_elements_text",
            "args":[{"::":"sql/arg","name":"{{i_statuses}}"}]
          },
            {
            "::":"sql/defenum",
            "schema":"core/application",
            "name":"EnumRequestStatus"
          }
          ]
        }
        ]
      }
      ]
    },
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-default [19] 
var brand_default = {
  "input":[{"symbol":"i_brand_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_default",
  "flags":{"public":true},
  "view":{
    "table":"Brand",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":["*/standard"],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-view-membership [19] 
var brand_view_membership = {
  "input":[{"symbol":"i_brand_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_view_membership",
  "flags":{},
  "view":{
    "table":"Brand",
    "type":"return",
    "tag":"view_membership",
    "access":{
      "symbol":"statsdb.api.core.query_brand/brand_access_is_member",
      "relation":"reverse",
      "query":{
        "clause":[
          {"owner":"{{<%>}}","__deleted__":false},
          {
          "__deleted__":false,
          "access":{"entries":{"account":"{{<%>}}"}}
        }
        ]
      },
      "roles":{"brand.member":true}
    },
    "query":[
      [
      "access",
      [
      "*/standard",
      [
      "entries",
      [
      "*/standard",
      [
      "account",
      [
      ["profile",["last_name","first_name","id","picture"]],
      "nickname",
      "id"
    ]
    ]
    ]
    ]
    ]
    ],
      "*/standard"
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-affiliation-default [19] 
var brand_affiliation_default = {
  "input":[{"symbol":"i_affiliation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_affiliation_default",
  "flags":{},
  "view":{
    "table":"BrandAffiliation",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["brand",["*/standard"]],
      "*/standard",
      ["organisation",["*/standard"]]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/brand-topic-sponsorship-default [19] 
var brand_topic_sponsorship_default = {
  "input":[{"symbol":"i_affiliation_id","type":"uuid"}],
  "return":"jsonb",
  "schema":"core/query-brand",
  "id":"brand_topic_sponsorship_default",
  "flags":{},
  "view":{
    "table":"BrandTopicSponsorship",
    "type":"return",
    "tag":"default",
    "access":{"query":null,"roles":{},"relation":null,"symbol":null},
    "query":[
      ["brand",["*/standard"]],
      "*/standard",
      ["topic",["*/standard"]]
    ],
    "guards":[],
    "autos":[]
  }
};

// statsapi.list.view-brand/make-views [22] 
function make_views(){
  return ut.collect_views([
    brand_all,
    brand_all_as_owner,
    brand_all_as_admin,
    brand_all_as_member,
    brand_by_name,
    brand_affiliation_by_organisation,
    brand_affiliation_by_organisation_bulk,
    brand_affiliation_by_brand,
    brand_affiliation_by_brand_bulk,
    brand_topic_sponsorship_by_topic,
    brand_topic_sponsorship_by_brand,
    brand_default,
    brand_view_membership,
    brand_affiliation_default,
    brand_topic_sponsorship_default
  ]);
}

var MODULE = {
  "brand_all":brand_all,
  "brand_all_as_owner":brand_all_as_owner,
  "brand_all_as_admin":brand_all_as_admin,
  "brand_all_as_member":brand_all_as_member,
  "brand_by_name":brand_by_name,
  "brand_affiliation_by_organisation":brand_affiliation_by_organisation,
  "brand_affiliation_by_organisation_bulk":brand_affiliation_by_organisation_bulk,
  "brand_affiliation_by_brand":brand_affiliation_by_brand,
  "brand_affiliation_by_brand_bulk":brand_affiliation_by_brand_bulk,
  "brand_topic_sponsorship_by_topic":brand_topic_sponsorship_by_topic,
  "brand_topic_sponsorship_by_brand":brand_topic_sponsorship_by_brand,
  "brand_default":brand_default,
  "brand_view_membership":brand_view_membership,
  "brand_affiliation_default":brand_affiliation_default,
  "brand_topic_sponsorship_default":brand_topic_sponsorship_default,
  "make_views":make_views
};

module.exports = MODULE