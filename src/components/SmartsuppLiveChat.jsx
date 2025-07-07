import { Helmet } from "react-helmet-async";

const SmartsuppLiveChat = () => {
  return (
    <Helmet>
      <script type="text/javascript">
        {`
         var _smartsupp = _smartsupp || {};
  _smartsupp.key = 'b0280b2b1b1d86a0ea7de41833aa4758f3a67199';
  window.smartsupp||(function(d) {
    var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
    s=d.getElementsByTagName('script')[0];c=d.createElement('script');
    c.type='text/javascript';c.charset='utf-8';c.async=true;
    c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
  })(document);
        `}
      </script>
    </Helmet>
  );
};

export default SmartsuppLiveChat;
